
// Interface for error details
export interface ErrorDetail {
  code: string;
  message: string;
  path: string[];
}

// Interface for error response data
export interface ErrorResponseData {
  error?: string;
  success?: boolean;
  data?: ErrorDetail[];
}

