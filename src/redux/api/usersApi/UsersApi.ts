import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { baseQuery } from "@/redux/config/Authapiconfig";
import { XapiResponse } from "@/types/XapiResponse";

interface XpikeyResponse {
  data: {
    token: string;
    organization: {
      id: string;
      name: string;
      email: string;
    };
  };
}

// Create API slice
export const UsersApi = createApi({
  reducerPath: "api/users/organzation",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getXpiKeyByorganization: builder.query<XapiResponse, void>({
        query: () => `/x-api-key/${ORGANIZATION_ID}`,
      }),
      
  }),
});

// Export hooks for usage in functional components
 export const { useGetXpiKeyByorganizationQuery } = UsersApi;