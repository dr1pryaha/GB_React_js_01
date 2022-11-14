import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import "../App.scss";
import MessageItem from "./MessageItem";
import MemberList from "./MemberList";
import SendMessageForm from "./SendMessageForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function Chats({ chatsList, setChatsList }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const { chatId = 1 } = useParams();
  // console.log(useParams());
  // console.log(chatId);

  let chat = chatsList.find(({ id }) => {
    return id === +chatId;
  });

  let isChatMissing = !chat;

  if (isChatMissing) {
    chat = chatsList[0];
    // redirect("/notFound");
  }

  const messageList = chat.messages;

  // const [messageList, setMessagesList] = useState([]);
  // useEffect(() => {
  //   setMessagesList(chat.messages);
  // });

  // console.log(messageList);

  const addMessageToChat = message => {
    const newMessageList = [...messageList, message];
    const newChatList = chatsList.map(chat => {
      if (+chatId === chat.id) {
        return { ...chat, messages: newMessageList };
      } else {
        return chat;
      }
    });
    setChatsList(newChatList);
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (isChatMissing) {
      return navigate("/notFound");
    }
  }, [isChatMissing]);

  useEffect(() => {
    // console.log(chatId);
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "robo"
    ) {
      setTimeout(() => {
        addMessageToChat({
          id: messageList.length + 1,
          text: `Сообщение получено от ${
            messageList[messageList.length - 1].author
          }`,
          author: "robo",
        });
      }, 1500);
    }
  }, [messageList]);
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "calc(100% - 78px)", position: "relative" }}
    >
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid sx={{ height: "100%" }} container>
          <Grid sx={{ height: "100%" }} item xs={4} md={3}>
            <MemberList chatsList={chatsList} chatId={chatId} />
          </Grid>
          <Grid sx={{ height: "100%" }} item xs={8} md={9}>
            <Item
              sx={{
                height: "calc(100% - 166px)",
                position: "relative",
                overflow: "auto",
                // backgroundColor: "#8774e1",
              }}
              elevation={0}
            >
              {messageList.map(({ text, id, author }) => (
                <MessageItem
                  text={text}
                  key={id}
                  author={author}
                  // text={chatsList[chatId].messages.text}
                />
              ))}
            </Item>
            <Divider />
            <Item elevation={0}>
              <SendMessageForm
                chatsList={chatsList}
                addMessageToChat={addMessageToChat}
                messageList={messageList}
                setChatsList={setChatsList}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
