// redux/services/productApi.ts
import { baseApi } from './baseApi';
import { Product, ProductsResponse, ProductQueryParams } from '../types';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. गेट प्रोडक्ट्स (सभी एडवांस्ड फ़िल्टर्स के साथ)
    getProducts: builder.query<ProductsResponse, ProductQueryParams>({
      query: ({ page = 1, limit = 20, category, state, city, area, search }) => {
        const params = new URLSearchParams({ page: String(page), limit: String(limit) });
        if (category) params.append('categoryId', category);
        if (state) params.append('stateId', state);
        if (city) params.append('cityId', city);
        if (area) params.append('areaId', area);
        if (search) params.append('q', search);

        return `/products?${params.toString()}`;
      },
      providesTags: ['Products'],
    }),
    // 2. एड प्रोडक्ट
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({ url: '/products', method: 'POST', body: newProduct }),
      invalidatesTags: ['Products'],
    }),
    // 3. एडिट/अपडेट प्रोडक्ट
    updateProduct: builder.mutation<Product, { id: string } & Partial<Product>>({
      query: ({ id, ...updatedData }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['Products'],
    }),
    // 4. डिलीट प्रोडक्ट
    deleteProduct: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/products/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
