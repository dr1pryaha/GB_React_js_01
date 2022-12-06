import "../App.scss";
import React from "react";

import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import { useSelector } from "react-redux";
import { getProfile } from "../store/profile/selectors";

// import { ChatMsg } from "@mui-treasury/packages/mui-components/src/chatMsg/ChatMsg";

export default function MessageItem(props) {
  const profileName = useSelector(getProfile);

  return (
    <div className="message-item">
      <ChatBox>
        {props.author === "robo" ? (
          <ReceiverMessage
            key={props.id}
            avatar={<Avatar>{props.author}</Avatar>}
          >
            {props.text}
          </ReceiverMessage>
        ) : (
          <SenderMessage key={props.id} avatar={<Avatar>{profileName}</Avatar>}>
            {props.text}
          </SenderMessage>
        )}
      </ChatBox>
    </div>
  );
}
