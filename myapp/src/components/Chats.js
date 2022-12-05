import React from "react";
import Container from "@mui/material/Container";
import "../App.scss";
import MessageItem from "./MessageItem";
import ChatsList from "./ChatsList";
import SendMessageForm from "./SendMessageForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import { AddChatDialog } from "./AddChatDialog";

export default function Chats({
  handleOpen,
  visible,
  handleClose,
  messageList,
  isChatMissing,
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // console.log(messageList);

  return (
    <Container
      maxWidth="xl"
      sx={{ height: "calc(100% - 78px)", position: "relative" }}
    >
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid sx={{ height: "100%" }} container>
          <Grid sx={{ height: "100%" }} item xs={4} md={3}>
            <Container maxWidth="xl" xs={4} md={3}>
              <Button
                sx={{ alignItem: "center" }}
                variant="outlined"
                startIcon={<ChatIcon />}
                onClick={handleOpen}
              >
                Add chat
              </Button>
            </Container>
            <ChatsList />
          </Grid>

          <Dialog open={visible} onClose={handleClose}>
            <AddChatDialog handleClose={handleClose} />
          </Dialog>

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
            {!isChatMissing && (
              <>
                <Divider />
                <Item elevation={0}>
                  <SendMessageForm />
                </Item>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
