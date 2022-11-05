import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import MessageItem from "./components/MessageItem";
import MemberList from "./components/MemberList";
import SendMessageForm from "./components/SendMessageForm";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  const [messageList, setMessagesList] = useState([]);

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "robot"
    ) {
      setTimeout(() => {
        const arr = [
          ...messageList,
          {
            id: messageList.length + 1,
            text: `Сообщение получено от ${
              messageList[messageList.length - 1].author
            }`,
            author: "robot",
          },
        ];
        setMessagesList(arr);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={6} md={3}>
            <MemberList />
          </Grid>
          <Grid
            item
            xs={6}
            md={9}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={4} md={4}>
              {messageList.map(({ text, id, author }) => (
                <MessageItem text={text} key={id} author={author} />
              ))}
            </Grid>
            <SendMessageForm
              messageList={messageList}
              setMessagesList={setMessagesList}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
