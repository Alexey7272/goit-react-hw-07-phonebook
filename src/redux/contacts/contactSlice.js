import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://642b4f5f208dfe2547162f30.mockapi.io/',
    }),
    endpoints: builder => ({
        query: () => `/contacts`,
    }),
});

export const { useFetchContactsQuery } = contactApi;