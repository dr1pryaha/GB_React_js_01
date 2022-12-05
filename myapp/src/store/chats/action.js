export const ADD_CHAT = "CHATS::ADD_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";

export const addChat = chat => ({
  type: ADD_CHAT,
  payload: chat,
});

export const removeChat = chatId => ({
  type: REMOVE_CHAT,
  payload: chatId,
});
