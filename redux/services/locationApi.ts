// redux/services/locationApi.ts
import { baseApi } from './baseApi';
import { State, City, Area } from '../types';

export const locationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // सभी स्टेट्स लाने के लिए
    getStates: builder.query<{ states: State[] }, void>({
      query: () => '/locations/states',
      providesTags: ['States'],
      keepUnusedDataFor: 1200, // लोकेशंस बार-बार नहीं बदलतीं, 20 मिनट कैशे
    }),
    // किसी स्पेसिफिक स्टेट की सिटीज लाने के लिए
    getCitiesByState: builder.query<{ cities: City[] }, string>({
      query: (stateId) => `/locations/states/${stateId}/cities`,
      providesTags: (result, error, stateId) => [{ type: 'Cities', id: stateId }],
    }),
    // किसी सिटी के एरिया/पिनकोड लाने के लिए
    getAreasByCity: builder.query<{ areas: Area[] }, string>({
      query: (cityId) => `/locations/cities/${cityId}/areas`,
      providesTags: (result, error, cityId) => [{ type: 'Areas', id: cityId }],
    }),
  }),
});

export const { 
  useGetStatesQuery, 
  useGetCitiesByStateQuery, 
  useGetAreasByCityQuery 
} = locationApi;
