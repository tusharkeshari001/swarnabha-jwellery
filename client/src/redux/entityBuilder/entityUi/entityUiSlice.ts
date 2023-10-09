import { createSlice } from '@reduxjs/toolkit'

export const entityUiSlice = createSlice({
  name: 'entityUi',
  initialState: {
    isEntitySelected: false,
  },
  reducers: {
    setEntitySelected: (state:any, payload) => {
        state.isSidebarLoaded = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEntitySelected } = entityUiSlice.actions

export default entityUiSlice.reducer