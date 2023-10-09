import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 0,
    open: false,
  },
  reducers: {
    setModalOpen: (state:any, action) => {
      state.open = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModalOpen } = modalSlice.actions

export default modalSlice.reducer