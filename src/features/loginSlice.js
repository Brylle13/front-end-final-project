import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://reqres.in/api/login';

const initialState = {
  token: '',
  status: null,
  error: null,
};

export const loginToApp = createAsyncThunk(
  'login/entry',
  async (credentials) => {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return res.json();
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutAccount: (state, action) => void (state.token = action.payload),
  },
  extraReducers(builder) {
    builder.addCase(loginToApp.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(loginToApp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.status = 'success';
    });
    builder.addCase(loginToApp.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export const { logoutAccount } = loginSlice.actions;
export default loginSlice.reducer;
