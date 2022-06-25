import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice'
import customerReducer from '../features/posts/CustomerSlice'
import reservationsReducer from '../features/posts/reservationSlice'

export const store = configureStore({
  reducer: {
    post: postsReducer,
    reservations: reservationsReducer,
    customer: customerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;



