import "../App.scss";
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
// import { ChatMsg } from "@mui-treasury/packages/mui-components/src/chatMsg/ChatMsg";

export default function MessageItem(props) {
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
