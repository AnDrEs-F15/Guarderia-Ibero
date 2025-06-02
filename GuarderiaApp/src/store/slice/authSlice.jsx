import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    session: ''
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    expired: (state) => {
      state.token = null;
      state.session = 'expired';
    },
    logout: (state) => {
      state.role = null;
      state.token = null;
      state.session = 'logout';
    },
    clear: (state) => {
      state.session = '';
    }
  }
});

export const { login, expired, logout, clear } = authSlice.actions;
export default authSlice.reducer;
