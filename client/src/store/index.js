import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootSaga from './rootSagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const tempStore = createStore(persistedReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export const store = tempStore;
export const persistor = persistStore(store);
