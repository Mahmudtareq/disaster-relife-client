import { configureStore } from "@reduxjs/toolkit";
import suppliesReducer from "./features/suppliesSlice";
import { baseApi } from "./api/api";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    supplies: suppliesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
