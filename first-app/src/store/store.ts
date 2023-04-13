import { configureStore } from '@reduxjs/toolkit';
import formPageReducer from './formPageSlice/formPageSlice';

export const store = configureStore({
  reducer: {
    formCards: formPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
