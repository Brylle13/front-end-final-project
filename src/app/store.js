import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import loginReducer from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer,
  },
});
