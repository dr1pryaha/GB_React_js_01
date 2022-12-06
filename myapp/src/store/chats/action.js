export const ADD_CHAT = "CHATS::ADD_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";

export const addChat = name => ({
  type: ADD_CHAT,
  payload: name,
});

export const removeChat = chatId => ({
  type: REMOVE_CHAT,
  payload: chatId,
});
