import { createSlice } from '@reduxjs/toolkit'

export const entityBuilderSlice = createSlice({
  name: 'entityBuilder',
  initialState: {
    value: 0,
    isSidebarLoaded: false,
    isSearchDataLoaded: true,
    isEntitySelected: false,
  },
  reducers: {
    setSidebarLoaded: (state:any, payload) => {
        state.isSidebarLoaded = payload;
    },
    setSearchDataLoaded: (state:any,payload) => {
        state.isSearchDataLoaded = payload;
    },
    setEntitySelected: (state:any, payload) => {
      state.isEntitySelected = payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setSidebarLoaded, setSearchDataLoaded, setEntitySelected } = entityBuilderSlice.actions

export default entityBuilderSlice.reducer