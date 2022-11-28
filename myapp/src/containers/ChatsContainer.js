import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chats from "../components/Chats";
import { getChatMessages } from "../helpers";
import { getChats } from "../store/chats/selectors";
import { getMessages } from "../store/messages/selectors";

export const ChatsContainer = () => {
  const { chatId = 1 } = useParams();

  const chats = useSelector(getChats);
  const messages = useSelector(getMessages);

  let chat = chats.find(({ id }) => {
    return id === +chatId;
  });

  let isChatMissing = !chat;

  if (isChatMissing) {
    chat = chats[0];
  }

  const messageList = getChatMessages(messages, chatId);

  const handleOpen = () => setVisible(true);
  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);

  return (
    <Chats
      handleOpen={handleOpen}
      visible={visible}
      handleClose={handleClose}
      messageList={messageList}
      isChatMissing={isChatMissing}
    />
  );
};
