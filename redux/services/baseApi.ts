// // redux/services/baseApi.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://yourdomain.com',
//     credentials: 'include', // External Node.js Backend से Cookies के लिए
//     prepareHeaders: (headers) => {
//       headers.set('Content-Type', 'application/json');
//       return headers;
//     },
//   }),
//   // 🏷️ हर मॉड्यूल का अपना अलग टैग ताकि कैशे मैनेजमेंट सटीक हो
//   tagTypes: ['Products', 'Categories', 'States', 'Cities', 'Areas'],
//   endpoints: () => ({}),
// });


// redux/services/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://yourdomain.com',
    credentials: 'include',
  }),
  // 🏷️ यहाँ 'User' की स्पेलिंग कैपिटल 'U' के साथ मैच होनी चाहिए
  tagTypes: ['User', 'Products', 'Categories', 'States', 'Cities', 'Areas'] as const, 
  endpoints: () => ({}),
});
