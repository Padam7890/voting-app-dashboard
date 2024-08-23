import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { baseQuery } from "@/redux/config/authApiconfig";
import { XapiResponse } from "@/types/XapiResponse";

export const UsersApi = createApi({
  reducerPath: "api/users/organzation",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getXpiKeyByorganization: builder.query<XapiResponse, void>({
      query: () => `/x-api-key/${ORGANIZATION_ID}`,
    }),
  }),
});

export const { useGetXpiKeyByorganizationQuery } = UsersApi;
