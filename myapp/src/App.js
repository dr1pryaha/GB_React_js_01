import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import MessageItem from "./components/MessageItem";
import MemberList from "./components/MemberList";
import SendMessageForm from "./components/SendMessageForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [messageList, setMessagesList] = useState([]);
  const [chatsList, setChatsList] = useState([
    { id: 1, name: "Brunch this weekend?" },
    { id: 2, name: "Summer BBQ" },
    { id: 3, name: "Oui Oui" },
  ]);

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "robo"
    ) {
      setTimeout(() => {
        const arr = [
          ...messageList,
          {
            id: messageList.length + 1,
            text: `Сообщение получено от ${
              messageList[messageList.length - 1].author
            }`,
            author: "robo",
          },
        ];
        setMessagesList(arr);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Header />
      <Container
        maxWidth="xl"
        sx={{ height: "calc(100% - 70px)", position: "relative" }}
      >
        <Box sx={{ flexGrow: 1, height: "100%" }}>
          <Grid sx={{ height: "100%" }} container>
            <Grid sx={{ height: "100%" }} item xs={6} md={3}>
              <MemberList chatsList={chatsList} />
            </Grid>
            <Grid sx={{ height: "100%" }} item xs={6} md={9}>
              <Item
                sx={{
                  height: "calc(100% - 166px)",
                  position: "relative",
                  overflow: "auto",
                  // maxHeight: 300,
                }}
                elevation={0}
              >
                {messageList.map(({ text, id, author }) => (
                  <MessageItem text={text} key={id} author={author} />
                ))}
              </Item>
              <Divider />
              <Item elevation={0}>
                <SendMessageForm
                  messageList={messageList}
                  setMessagesList={setMessagesList}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <MemberList chatsList={chatsList} />
            </Grid>

            <Grid item xs={6} md={3}>
              <Grid
                alignItems="stretch"
                container
                direction="column"
                spacing={2}
              >
                <Grid item xs={6} md={3}>
                  <Item
                    // style={{ height: "calc(100% - 325px)", overflow: "auto" }}
                    elevation={0}
                  >
                    {messageList.map(({ text, id, author }) => (
                      <MessageItem
                        text={text}
                        key={id}
                        author={author}
                        // textRobo={textRobo}
                        // authorRobo={authorRobo}
                      />
                    ))}
                  </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Item
                    elevation={0}
                    style={{
                      height: "100px",
                    }}
                  >
                    <SendMessageForm
                      messageList={messageList}
                      setMessagesList={setMessagesList}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container> */}
    </div>
  );
}

export default App;
