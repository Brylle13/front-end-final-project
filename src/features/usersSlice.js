import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://reqres.in/api/users/';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await fetch(URL)
    .then((res) => res.json())
    .then((json) => json.data);
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { status: 'idle' },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => void (state.status = 'loading'),
    [fetchUsers.rejected]: (state) => void (state.status = 'failed'),
    [fetchUsers.fulfilled]: (state, action) =>
      void ((state.status = 'success'), (state.users = action.payload)),
  },
});

export default usersSlice.reducer;
