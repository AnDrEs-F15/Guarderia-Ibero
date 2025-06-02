import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slice/authSlice';

const rootReducer = combineReducers({
  auth: authReducer // Reducers individuales aquí
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // Solo persistir este reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
