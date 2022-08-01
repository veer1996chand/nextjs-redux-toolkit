import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productSlice from './Features/ProductSlice/ProductSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    // Since we don't have any yet, leave this empty
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
