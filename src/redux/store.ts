import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./api/usersApi/AuthApi";
import { UsersApi } from "./api/usersApi/UsersApi";
import { sponserApi } from "./api/sponserApi/sponserAPi";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
    [sponserApi.reducerPath]: sponserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      UsersApi.middleware,
      sponserApi.middleware,
    ),
});

// Set up types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
