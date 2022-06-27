import { createSlice } from '@reduxjs/toolkit'

interface sideBarState {
  active: boolean
}

const initialState: sideBarState = {
  active: false,
}



const toggleSideBarSlice = createSlice({
    name: 'alarm',
    initialState: initialState,
    reducers: {
      toggleOn: (state = initialState) => {
        state.active = true;
      },
      toggleOff: (state = initialState) => {
        state.active = false;
      }
    }   
});

export const {toggleOn, toggleOff} = toggleSideBarSlice.actions;
export default toggleSideBarSlice.reducer;