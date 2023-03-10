import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './slices/imageSlice'
// ...

export const store = configureStore({
  reducer: {
    image: imageReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// use this to get state
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// use this to dispatch actions
export type AppDispatch = typeof store.dispatch


