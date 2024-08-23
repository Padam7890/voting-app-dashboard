import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, getXPIKey, saveXPIKey } from "@/utils/auth";
import { VOTING_USER_BASE_URI } from "@/config";
import { fetchXPIKeyAndUpdateHeaders } from "./fetchXpikey";
import { prepareHeaders } from "./headerConfig";

export const MainbaseQuery = fetchBaseQuery({
  baseUrl: VOTING_USER_BASE_URI,
  prepareHeaders: prepareHeaders,
});
