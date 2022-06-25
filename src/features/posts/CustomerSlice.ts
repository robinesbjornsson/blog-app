import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string;
}


export interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [
    {
      id: '1',
      name: 'Post one',
      food: 'im having fun',
    },
    {
      id: '2',
      name: 'Post two',
      food: 'im having fun',
    },
  ],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;