// Importing necessary types from @reduxjs/toolkit
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import { ErrorResponseData } from '@/types/error';
import { errorToast } from '@/utils/toastNotification';


// Type guard for FetchBaseQueryError
const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError =>
    error && 'status' in error && 'data' in error;
  
  // Type guard for SerializedError
  const isSerializedError = (error: any): error is SerializedError =>
    error && 'message' in error;
  
  export const handleError = (error: FetchBaseQueryError | SerializedError | unknown) => {
    let errorMessage: string = "Something went wrong";
  
    if (isFetchBaseQueryError(error)) {
      // Handle FetchBaseQueryError
      const errorData = error.data as ErrorResponseData | undefined;
      if (errorData) {
        if (errorData.error) {
          errorMessage = errorData.error;
        } else if (errorData.data && errorData.data.length > 0) {
          errorMessage = errorData.data[0].message || "An error occurred";
        }
      }
    } else if (isSerializedError(error)) {
      // Handle SerializedError
      errorMessage = error.message || "An error occurred";
    } else if (error instanceof Error) {
      // Handle generic JavaScript Error
      errorMessage = error.message || "An error occurred";
    }
  
    errorToast(errorMessage);
    console.log(error);
  };
  

