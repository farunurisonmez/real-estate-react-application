import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { AdvertModel } from "../../types/models/AdvertModel";
import { baseUrl } from "../../config";

export const advertApi = createApi({
    reducerPath: 'advertApi',
    baseQuery: fetchBaseQuery (
        {
            baseUrl: baseUrl+"/api/Advert",
        }
    ),
    tagTypes: ['advertApi'],
    endpoints: (builder) => ({
        fetchAdvert: builder.query<AdvertModel, void>({
            query: () => ({
                url: baseUrl+"/api/Advert",
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
})

export const {
    useFetchAdvertQuery,
    endpoints: { fetchAdvert }
} = advertApi;