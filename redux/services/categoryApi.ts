// redux/services/categoryApi.ts
import { baseApi } from './baseApi';
import { Category } from '../types';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[] }, void>({
      query: () => '/categories',
      providesTags: ['Categories'],
      keepUnusedDataFor: 600, // 10 मिनट कैशे
    }),
    addCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({ url: '/categories', method: 'POST', body }),
      invalidatesTags: ['Categories'],
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;
