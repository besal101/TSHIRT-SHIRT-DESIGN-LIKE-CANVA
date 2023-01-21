import { configureStore } from "@reduxjs/toolkit";
import selectedMediaSlice from "../redux/mediaSlice";

export const store = configureStore({
  reducer: {
    selectedMedia: selectedMediaSlice,
    // Add the generated reducer as a specific top-level slice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
