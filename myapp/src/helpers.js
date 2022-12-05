export const getChatMessages = (messages, chatId) => messages[chatId] || [];

export const getChatLastMessage = (messages, chatId) => {
  const chatMessages = getChatMessages(messages, chatId);
  const chatLastMessage = chatMessages[chatMessages.length - 1];
  return chatLastMessage;
};

export const getLastChatId = chats => {
  return chats[chats.length - 1].chatId;
};
