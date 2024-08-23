import { MainbaseQuery } from "@/redux/config/mainApiConfig";
import { Sponsers } from "@/types/Sponsers";
import { createApi } from "@reduxjs/toolkit/query/react";

interface SponserData {
  data: Sponsers[];
}

export const sponserApi = createApi({
  reducerPath: "api/sponsers",
  tagTypes: ["Sponsors"],
  baseQuery: MainbaseQuery,
  endpoints: (builder) => ({
    getSponsers: builder.query<SponserData, void>({
      query: () => "/sponsers",
      providesTags: ["Sponsors"],
    }),
  }),
});

export const { useGetSponsersQuery } = sponserApi;
