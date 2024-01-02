import { metadata } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const metadataApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMetadata: builder.query({
            query: () => metadata,
        }),
        // postProjects: builder.mutation({
        //     query: (data) => ({
        //         url: "projects",
        //         method: "POST",
        //         body: data,
        //     }),
        // }),
    }),
});

export const { useGetMetadataQuery } = metadataApi;
