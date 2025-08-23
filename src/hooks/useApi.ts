// Custom hook for handling API calls with loading and error states

import { useState, useCallback, useRef } from "react";
import { AppError, LoadingState } from "../types";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: AppError) => void;
  onFinally?: () => void;
  initialData?: T;
  autoExecute?: boolean;
}

interface UseApiReturn<T> extends LoadingState {
  data: T | null;
  execute: (...args: any[]) => Promise<T>;
  reset: () => void;
  setData: (data: T) => void;
}

export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions<T> = {}
): UseApiReturn<T> {
  const {
    onSuccess,
    onError,
    onFinally,
    initialData = null,
    autoExecute = false,
  } = options;

  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const execute = useCallback(
    async (...args: any[]): Promise<T> => {
      // Cancel previous request if still pending
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      setError(null);

      try {
        const result = await apiFunction(...args);

        // Check if request was cancelled
        if (abortControllerRef.current?.signal.aborted) {
          throw new Error("Request cancelled");
        }

        setData(result);
        onSuccess?.(result);
        return result;
      } catch (err) {
        // Check if request was cancelled
        if (abortControllerRef.current?.signal.aborted) {
          throw new Error("Request cancelled");
        }

        const appError = err as AppError;
        setError(appError);
        onError?.(appError);
        throw appError;
      } finally {
        // Check if request was cancelled
        if (!abortControllerRef.current?.signal.aborted) {
          setIsLoading(false);
          onFinally?.();
        }
      }
    },
    [apiFunction, onSuccess, onError, onFinally]
  );

  const reset = useCallback(() => {
    setData(initialData);
    setIsLoading(false);
    setError(null);

    // Cancel pending request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, [initialData]);

  // Auto-execute if enabled
  if (autoExecute && !data && !isLoading && !error) {
    execute([]);
  }

  return {
    data,
    isLoading,
    error,
    execute,
    reset,
    setData,
  };
}

// Hook for handling form submission
export function useFormSubmit<T = any>(
  submitFunction: (data: T) => Promise<any>,
  options: UseApiOptions<any> = {}
) {
  const { onSuccess, onError, onFinally } = options;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<AppError | null>(null);

  const submit = useCallback(
    async (data: T): Promise<any> => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const result = await submitFunction(data);
        onSuccess?.(result);
        return result;
      } catch (err) {
        const appError = err as AppError;
        setSubmitError(appError);
        onError?.(appError);
        throw appError;
      } finally {
        setIsSubmitting(false);
        onFinally?.();
      }
    },
    [submitFunction, onSuccess, onError, onFinally]
  );

  const reset = useCallback(() => {
    setIsSubmitting(false);
    setSubmitError(null);
  }, []);

  return {
    isSubmitting,
    submitError,
    submit,
    reset,
  };
}

// Hook for handling pagination
export function usePagination<T = any>(
  fetchFunction: (
    page: number,
    limit: number
  ) => Promise<{
    data: T[];
    total: number;
    page: number;
    limit: number;
  }>,
  initialLimit: number = 20
) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchPage = useCallback(
    async (page: number, append: boolean = false) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchFunction(page, initialLimit);

        if (append) {
          setData((prev) => [...prev, ...result.data]);
        } else {
          setData(result.data);
        }

        setTotal(result.total);
        setCurrentPage(result.page);
        setHasMore(result.data.length === initialLimit);
      } catch (err) {
        const appError = err as AppError;
        setError(appError);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFunction, initialLimit]
  );

  const loadNextPage = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchPage(currentPage + 1, true);
    }
  }, [fetchPage, currentPage, isLoading, hasMore]);

  const refresh = useCallback(() => {
    fetchPage(1, false);
  }, [fetchPage]);

  const reset = useCallback(() => {
    setData([]);
    setCurrentPage(1);
    setTotal(0);
    setHasMore(true);
    setError(null);
  }, []);

  return {
    data,
    isLoading,
    error,
    currentPage,
    total,
    hasMore,
    fetchPage,
    loadNextPage,
    refresh,
    reset,
  };
}

// Hook for handling search with debounce
export function useSearch<T = any>(
  searchFunction: (query: string) => Promise<T[]>,
  delay: number = 500
) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const search = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsSearching(true);
      setError(null);

      try {
        const searchResults = await searchFunction(searchQuery);
        setResults(searchResults);
      } catch (err) {
        const appError = err as AppError;
        setError(appError);
      } finally {
        setIsSearching(false);
      }
    },
    [searchFunction]
  );

  const handleSearchChange = useCallback(
    (newQuery: string) => {
      setQuery(newQuery);

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout for debounced search
      timeoutRef.current = setTimeout(() => {
        search(newQuery);
      }, delay);
    },
    [search, delay]
  );

  const clearSearch = useCallback(() => {
    setQuery("");
    setResults([]);
    setError(null);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return {
    query,
    results,
    isSearching,
    error,
    handleSearchChange,
    clearSearch,
    search,
  };
}
