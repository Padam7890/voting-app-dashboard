import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, getXPIKey, saveXPIKey } from "@/utils/auth";
import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { XapiResponse } from "@/types/XapiResponse";
import { prepareHeaders } from ".//headerConfig";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders:prepareHeaders,
});
