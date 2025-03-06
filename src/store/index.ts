// manejo de estado con redux toolkit
// documentacion para iniciar con redux https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { count: counterReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
