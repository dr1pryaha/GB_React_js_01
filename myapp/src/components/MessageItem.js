import "../App.scss";
import React, { useCallback } from "react";

import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import { useSelector } from "react-redux";

// import { ChatMsg } from "@mui-treasury/packages/mui-components/src/chatMsg/ChatMsg";

export default function MessageItem(props) {
  const profileName = useSelector(state => state.profile.name);

  // const renderMessage = useCallback(
  //   (message, i) => (
  //     <div key={i}>
  //       <span>
  //         {message.author === AUTHORS.ME ? profileName : message.author}:
  //       </span>
  //       <span>{message.text}</span>
  //     </div>
  //   ),
  //   [profileName]
  // );

  // const renderMessage = useCallback(
  //   (message, i) => (
  //     <ChatBox>
  //       {message.author === "robo" ? (
  //         <ReceiverMessage key={i} avatar={<Avatar>{message.author}</Avatar>}>
  //           {message.text}
  //         </ReceiverMessage>
  //       ) : (
  //         <SenderMessage key={i} avatar={<Avatar>{profileName}</Avatar>}>
  //           {message.text}
  //         </SenderMessage>
  //       )}
  //     </ChatBox>
  //   ),
  //   [profileName]
  // );

  return (
    <div className="message-item">
      <ChatBox>
        {props.author === "robo" ? (
          <ReceiverMessage avatar={<Avatar>{props.author}</Avatar>}>
            {props.text}
          </ReceiverMessage>
        ) : (
          <SenderMessage avatar={<Avatar>{props.author}</Avatar>}>
            {props.text}
          </SenderMessage>
        )}
      </ChatBox>
    </div>
  );
}
