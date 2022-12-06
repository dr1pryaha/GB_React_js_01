import { addMessage } from "../store/messages/action";
import { getChatMessages } from "../helpers";
import { getMessages } from "../store/messages/selectors";

export const addRoboMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    const state = getState();
    const messages = getMessages(state);
    const messageList = getChatMessages(messages, chatId);
    const botMessage = {
      id: messageList.length + 1,
      text: `Сообщение получено от ${
        messageList[messageList.length - 1].author
      }`,
      author: "robo",
    };
    setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
  };
