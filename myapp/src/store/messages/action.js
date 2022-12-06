import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { db } from "../../services/firebase";
import { removeChat } from "../chats/action";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const changeMessage = messages => ({
  type: CHANGE_MESSAGES,
  payload: { messages },
});

const getPayloadFromSnapshot = snapshot => {
  // return (snapshot.val() || {})[1] || {};
  let messages = {};
  snapshot.forEach(mes => {
    const chatId = mes.key;
    const chatMessages = Object.values(mes.val());
    // const chatId = +Object.keys(message)[0];
    // const messageValue = messages[chatId];
    // const prevMessages = messages[chatId] || [];
    messages = {
      ...messages,
      [chatId]: chatMessages,
    };
  });
  return messages;
};

export const addMessageWithFirebase = (chatId, message) => async () => {
  set(ref(db, `messages/${chatId}/${message.id}`), message);
  // db.ref("messages").child(chatId).child(message.id).set(message);
};

export const deleteMessageWithFirebase = chatId => async dispatch => {
  remove(ref(db, `messages/${chatId}`));
  dispatch(removeChat(chatId));
  // db.ref("messages").child(chatId).child(messageId).remove();
};

export const initMessageTracking = () => dispatch => {
  onValue(ref(db, `messages`), snapshot => {
    const payload = getPayloadFromSnapshot(snapshot);
    dispatch(changeMessage(payload));
  });
  // onValue(ref(db, `messages`), snapshot => {
  //   const payload = getPayloadFromSnapshot(snapshot);
  //   dispatch({
  //     type: CHANGE_MESSAGES,
  //     payload,
  //   });
  // });
};
