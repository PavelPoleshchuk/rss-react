import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IRMApi } from '../../components/types/types';

export const fetchName = createApi({
  reducerPath: 'fetchName',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (builder) => ({
    fetchName: builder.query<IRMApi, string>({
      query: (name) => `?name=${name}`,
    }),
  }),
});

export const { useFetchNameQuery } = fetchName;
