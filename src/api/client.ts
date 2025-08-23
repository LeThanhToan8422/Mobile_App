// API client configuration using axios
// In real project, you would use this for actual API calls

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_CONFIG } from "../constants";
import { ApiResponse, AppError } from "../types";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config: any) => {
        // Add auth token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => {
        const appError = this.handleError(error);
        return Promise.reject(appError);
      }
    );
  }

  private getAuthToken(): string | null {
    // In real app, get from secure storage
    return null;
  }

  private handleError(error: any): AppError {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 401:
          return {
            code: "UNAUTHORIZED",
            message: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
            details: data,
          };
        case 403:
          return {
            code: "FORBIDDEN",
            message: "Bạn không có quyền truy cập tính năng này.",
            details: data,
          };
        case 404:
          return {
            code: "NOT_FOUND",
            message: "Không tìm thấy dữ liệu yêu cầu.",
            details: data,
          };
        case 422:
          return {
            code: "VALIDATION_ERROR",
            message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
            details: data,
          };
        case 500:
          return {
            code: "SERVER_ERROR",
            message: "Lỗi máy chủ. Vui lòng thử lại sau.",
            details: data,
          };
        default:
          return {
            code: "HTTP_ERROR",
            message: `Lỗi HTTP: ${status}`,
            details: data,
          };
      }
    } else if (error.request) {
      // Network error
      return {
        code: "NETWORK_ERROR",
        message: "Lỗi kết nối mạng. Vui lòng kiểm tra lại.",
        details: error.request,
      };
    } else {
      // Other error
      return {
        code: "UNKNOWN_ERROR",
        message: "Đã xảy ra lỗi không xác định.",
        details: error.message,
      };
    }
  }

  // Generic GET request
  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Generic POST request
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<ApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Generic PUT request
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Generic DELETE request
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Generic PATCH request
  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.patch<ApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Upload file
  async upload<T>(
    url: string,
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<ApiResponse<T>> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await this.client.post<ApiResponse<T>>(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: any) => {
          if (onProgress && progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            onProgress(progress);
          }
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Set auth token
  setAuthToken(token: string) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  // Clear auth token
  clearAuthToken() {
    delete this.client.defaults.headers.common.Authorization;
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

// Export for use in other files
export default apiClient;
