import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers';

const store = configureStore({
  reducer: registrationReducer,
});

export default store;
