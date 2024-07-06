// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
// import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import {rootSaga} from '../sagas';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'apod',
  storage: AsyncStorage,
  whitelist: ['theme'], // we're only persisting our theme state object
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
  //applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store);
