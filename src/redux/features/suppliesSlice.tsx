import { Inputs } from "@/pages/CreateSupplies";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TInitialState = {
  supplies: Inputs[];
};
const initialState: TInitialState = {
  supplies: [],
};

const suppliesSlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addSupplies: (state, action: PayloadAction<Inputs>) => {
      state.supplies.push({ ...action.payload });
    },
  },
});
export const { addSupplies } = suppliesSlice.actions;
export default suppliesSlice.reducer;
