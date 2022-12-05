import { addMessage, addMessageWithFirebase } from "../store/messages/action";
import { getChatMessages } from "../helpers";
import { getMessages } from "../store/messages/selectors";

export const addRoboMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessageWithFirebase(chatId, message));
    const state = getState();
    const messages = getMessages(state);
    const messageList = getChatMessages(messages, chatId);

    setTimeout(() => {
      const botMessage = {
        id: `${chatId}-${Date.now()}`,
        text: `Сообщение получено от ${
          messageList[messageList.length - 1].author
        }`,
        author: "robo",
      };
      dispatch(addMessageWithFirebase(chatId, botMessage));
    }, 2000);
  };
