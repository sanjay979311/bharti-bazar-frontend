// src/components/StoreProvider.tsx
'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useEffect } from 'react';
import { useGetProfileQuery } from '@/redux/services/authApi';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, clearAuth } from '@/redux/slices/authSlice';

function AuthInit({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (data?.user) dispatch(setAuth(data.user));
    if (error) dispatch(clearAuth());
  }, [data, error, dispatch]);

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center font-bold text-gray-700">Loading B2B Network...</div>;
  }

  return <>{children}</>;
}

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInit>{children}</AuthInit>
    </Provider>
  );
}
