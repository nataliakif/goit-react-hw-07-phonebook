import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import combineReducers from './reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { contacts: combineReducers },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);
console.log(combineReducers);
export default store;
