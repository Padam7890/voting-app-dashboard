import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, getXPIKey, saveXPIKey } from "@/utils/auth";
import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { XapiResponse } from "@/types/XapiResponse";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = getToken();
    const XPIKey = getXPIKey();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    if (XPIKey) {
      headers.set("x-api-key", XPIKey);
    } else {
      async () => {
        const xpikey = await fetchXPIKeyAndUpdateHeaders(headers);
        return xpikey;
      };
    }
    return headers;
  },
});

const fetchXPIKeyAndUpdateHeaders = async (headers: Headers) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/x-api-key/${ORGANIZATION_ID}`,
    );
    const data: XapiResponse = await response.json();

    if (data?.data.token) {
      headers.set("x-api-key", data.data.token);
      saveXPIKey(data.data.token);
    }
  } catch (error) {
    console.error("Failed to fetch XPI key", error);
  }
};
