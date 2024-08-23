
import { getToken, getXPIKey } from "@/utils/auth";
import { fetchXPIKeyAndUpdateHeaders } from "./fetchXpikey";

export const prepareHeaders = async (headers: any) => {
  const token = getToken();
  const XPIKey = getXPIKey();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (XPIKey) {
    headers.set("x-api-key", XPIKey);
  } else {
    await fetchXPIKeyAndUpdateHeaders(headers);
  }

  return headers;
};
