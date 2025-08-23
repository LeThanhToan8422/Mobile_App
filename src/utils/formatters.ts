// Utility functions for formatting data

import { CURRENCY, DATE_FORMATS } from "../constants";

/**
 * Format price to Vietnamese currency
 */
export const formatPrice = (
  price: number,
  currency: string = CURRENCY.VND,
  locale: string = "vi-VN"
): string => {
  if (currency === CURRENCY.VND) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  if (currency === CURRENCY.USD) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }

  return price.toString();
};

/**
 * Format price with discount
 */
export const formatPriceWithDiscount = (
  originalPrice: number,
  discountedPrice: number,
  currency: string = CURRENCY.VND
): { original: string; discounted: string; discountPercent: number } => {
  const discountPercent = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  return {
    original: formatPrice(originalPrice, currency),
    discounted: formatPrice(discountedPrice, currency),
    discountPercent,
  };
};

/**
 * Format date to display format
 */
export const formatDate = (
  date: string | Date,
  format: string = DATE_FORMATS.DISPLAY
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return "Invalid Date";
  }

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");

  switch (format) {
    case DATE_FORMATS.DISPLAY:
      return `${day}/${month}/${year}`;
    case DATE_FORMATS.DISPLAY_TIME:
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    case DATE_FORMATS.API:
      return `${year}-${month}-${day}`;
    case DATE_FORMATS.API_TIME:
      return dateObj.toISOString();
    default:
      return `${day}/${month}/${year}`;
  }
};

/**
 * Format relative time (e.g., "2 giờ trước", "3 ngày trước")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears} năm trước`;
  }
  if (diffInMonths > 0) {
    return `${diffInMonths} tháng trước`;
  }
  if (diffInWeeks > 0) {
    return `${diffInWeeks} tuần trước`;
  }
  if (diffInDays > 0) {
    return `${diffInDays} ngày trước`;
  }
  if (diffInHours > 0) {
    return `${diffInHours} giờ trước`;
  }
  if (diffInMinutes > 0) {
    return `${diffInMinutes} phút trước`;
  }
  if (diffInSeconds > 0) {
    return `${diffInSeconds} giây trước`;
  }

  return "Vừa xong";
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format Vietnamese phone number
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
};

/**
 * Format credit card number (mask middle digits)
 */
export const formatCreditCard = (cardNumber: string): string => {
  const cleaned = cardNumber.replace(/\D/g, "");

  if (cleaned.length === 16) {
    return `${cleaned.slice(0, 4)} **** **** ${cleaned.slice(12)}`;
  }

  return cardNumber;
};

/**
 * Format number with thousands separator
 */
export const formatNumber = (
  num: number,
  locale: string = "vi-VN",
  options?: Intl.NumberFormatOptions
): string => {
  return new Intl.NumberFormat(locale, options).format(num);
};

/**
 * Format percentage
 */
export const formatPercentage = (
  value: number,
  total: number,
  decimals: number = 1
): string => {
  const percentage = (value / total) * 100;
  return `${percentage.toFixed(decimals)}%`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (
  text: string,
  maxLength: number,
  suffix: string = "..."
): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalize first letter of each word
 */
export const capitalizeWords = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Generate initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};
