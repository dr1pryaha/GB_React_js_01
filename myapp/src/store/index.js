import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "../store/profile/reducer";
import { chatsReducer } from "../store/chats/reducer";
import { messagesReducer } from "../store/messages/reducer";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import gistsReducer from "./gists/reducer";
import { initMessageTracking } from "./messages/action";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.dispatch(initMessageTracking());

export const persistor = persistStore(store);
