import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFetchInputQueryState {
  inputQuery: string;
  cardQuery: string;
  submittedQuery: string;
  modalOpen: boolean;
}

const initialState: IFetchInputQueryState = {
  inputQuery: '',
  cardQuery: '1',
  submittedQuery: '',
  modalOpen: false,
};

export const homePageSlice = createSlice({
  name: 'homePageState',
  initialState,
  reducers: {
    addInputQuery: (state, action: PayloadAction<string>) => {
      state.inputQuery = action.payload;
    },
    addCardQuery: (state, action: PayloadAction<string>) => {
      state.cardQuery = action.payload;
    },
    addSubmittedQuery: (state) => {
      state.submittedQuery = state.inputQuery;
    },
    modalOpen: (state) => {
      state.modalOpen = true;
    },
    modalClose: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { addInputQuery, addCardQuery, addSubmittedQuery, modalOpen, modalClose } =
  homePageSlice.actions;

export default homePageSlice.reducer;
