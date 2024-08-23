import { API_BASE_URL, ORGANIZATION_ID } from "@/config";
import { XapiResponse } from "@/types/XapiResponse";
import { saveXPIKey } from "@/utils/auth";

export const fetchXPIKeyAndUpdateHeaders = async (headers: Headers) => {
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
  