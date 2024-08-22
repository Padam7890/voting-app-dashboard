import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./api/usersApi/AuthApi";
import { UsersApi } from "./api/usersApi/UsersApi";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,UsersApi.middleware),

  // Optional: you can enable devTools
  //   devTools: process.env.NODE_ENV !== 'production',
});

// Set up types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
