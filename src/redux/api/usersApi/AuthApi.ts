import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { baseQuery } from "../../config/Authapiconfig";
import { XapiResponse } from "@/types/XapiResponse";

// Interface for login data
interface LoginData {
  token: string;
}

// Interface for login response
interface LoginResponse {
  data: LoginData;
}

// Create API slice
export const AuthApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: "/organizations/login",
          method: "POST",
          body: credentials,
        }),
      },
    ),
  }),
});

// Export hooks for usage in functional components
export const { useLoginMutation } = AuthApi;
