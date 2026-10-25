
import { baseApi } from './baseApi';
import { User, LoginCredentials, RegisterCredentials, AuthResponse, BaseSuccessResponse } from '@/redux/types';
import { setAuth, clearAuth } from '../slices/authSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // 👤 1. एडवांस्ड रजिस्ट्रेशन (Register)
    registerUser: builder.mutation<AuthResponse, RegisterCredentials>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      // एडवांस लाइफसाइकिल लिंक: रजिस्ट्रेशन के तुरंत बाद ही क्लाइंट स्लाइस को अपडेट कर देगा
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.user) {
            dispatch(setAuth(data.user));
          }
        } catch (error) {
          // एरर आने पर कुछ नहीं करना, कंपोनेंट इसे हैंडल कर लेगा
        }
      },
    }),

    // 🔑 2. एडवांस्ड लॉगिन (Login)
    loginUser: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
      // 🚀 बेस्ट प्रैक्टिस: जैसे ही लॉगिन सक्सेसफुल होगा, यह सीधे Redux Slice (Client State) में यूजर को डाल देगा।
      // इससे आपको UI कंपोनेंट में अलग से dispatch() नहीं लिखना पड़ेगा।
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.user) {
            dispatch(setAuth(data.user));
          }
        } catch (error) {
          dispatch(clearAuth());
        }
      },
    }),

    // 🔄 3. गेट प्रोफाइल / सेशन चेक (Silent Verification)
    getProfile: builder.query<AuthResponse, void>({
      query: () => '/auth/me',
      providesTags: ['User'],
      // जब ऐप पहली बार लोड होगा या बैकग्राउंड में रिफ्रेश होगा, यह हुक क्लाइंट स्टेट को सिंक रखेगा
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.user) {
            dispatch(setAuth(data.user));
          }
        } catch (error) {
          dispatch(clearAuth()); // अगर कुकी इनवैलिड है तो क्लाइंट स्टेट साफ़ करें
        }
      },
    }),

    // 🚪 4. लॉगआउट (Logout)
    logoutUser: builder.mutation<BaseSuccessResponse, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(clearAuth()); // सर्वर के साथ-साथ फ्रंटएंड स्टेट तुरंत क्लियर करें
        } catch (error) {
          console.error("Logout middleware sync error:", error);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetProfileQuery,
  useLogoutUserMutation,
} = authApi;
