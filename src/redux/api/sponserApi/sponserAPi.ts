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
    deleteSponser: builder.mutation({
      query: (id) => ({
        url: `/sponsers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['Sponsors']
    }),
    addSponser: builder.mutation<SponserData, FormData>({
      query: (sponser) => ({
        url: "/sponsers",
        method: "POST",
        body: sponser,
      }),
      invalidatesTags:['Sponsors']
    }),
    //updateSponsors
    getOneSponser:builder.query<Sponsers, void>({
      query: (id) => ({
        url: `/sponsers/${id}`,
        method: "GET",
      }),
      providesTags: ["Sponsors"],
    })


  }),
});

export const { useGetSponsersQuery ,useDeleteSponserMutation,useAddSponserMutation ,useGetOneSponserQuery} = sponserApi;
