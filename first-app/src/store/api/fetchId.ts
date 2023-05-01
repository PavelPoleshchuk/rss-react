import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResultsCard } from '../../components/types/types';

export const fetchId = createApi({
  reducerPath: 'fetchId',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (builder) => ({
    fetchId: builder.query<IResultsCard, string>({
      query: (id) => id,
    }),
  }),
});

export const { useFetchIdQuery } = fetchId;
