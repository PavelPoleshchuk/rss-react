import { configureStore } from '@reduxjs/toolkit';
import formPageSlice from './formPageSlice/formPageSlice';
import fetchInputQuerySlice from './homePageSlice/homePageSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { fetchName } from './api/fetchName';
import { fetchId } from './api/fetchId';

export const store = configureStore({
  reducer: {
    formPage: formPageSlice,
    homePage: fetchInputQuerySlice,
    [fetchName.reducerPath]: fetchName.reducer,
    [fetchId.reducerPath]: fetchId.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(fetchName.middleware)
      .concat(fetchId.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
