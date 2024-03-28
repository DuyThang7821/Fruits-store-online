import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice  from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist'

const commonConfig = {
  storage
}
const userConfig = {
  ...commonConfig,
  whitelist: ['isLoggedIn'],
  key: 'shop/user'
}
export const store = configureStore({
  reducer: {
      user: persistReducer(userConfig, userSlice)
  },
});
export const persistor = persistStore(store);