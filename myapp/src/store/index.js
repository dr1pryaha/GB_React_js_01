import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { profileReducer } from "../store/profile/reducer";
import { chatsReducer } from "../store/chats/reducer";
import { messagesReducer } from "../store/messages/reducer";

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

export const store = configureStore({ reducer: rootReducer });
