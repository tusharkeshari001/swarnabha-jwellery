import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboard/dashboardSlice';
import entityBuilderReducer from './entityBuilder/entityBuilderSlice';
import entityUiReducer from './entityBuilder/entityUi/entityUiSlice';
import modalReducer from './modal/modalSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    entityBuilder: entityBuilderReducer,
    entityUi: entityUiReducer,
    modal: modalReducer,
  },
})