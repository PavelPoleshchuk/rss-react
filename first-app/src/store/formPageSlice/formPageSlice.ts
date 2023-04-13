import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'components/types/types';

export interface IFormPageState {
  cardsArray: ICard[];
  showData: boolean;
}

const initialState: IFormPageState = {
  cardsArray: [],
  showData: false,
};

export const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    showOn: (state) => {
      state.showData = true;
    },
    showOff: (state) => {
      state.showData = false;
    },
    addCard: (state, action: PayloadAction<ICard>) => {
      state.cardsArray.push(action.payload);
    },
  },
});

export const { showOn, showOff, addCard } = formPageSlice.actions;

export default formPageSlice.reducer;
