// redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ❌ गलत तरीका (बिना कर्ली ब्रेसेस के): import User from '@/redux/types';
//  सही तरीका (कर्ली ब्रेसेस के साथ):
import { User } from '@/redux/types'; 

interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = { 
  currentUser: null, 
  isAuthenticated: false 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    clearAuth: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
