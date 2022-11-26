import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { getChatLastMessage } from "../helpers";
import { removeChat } from "../store/chats/action";
import { getMessages } from "../store/messages/selectors";
import { getChats } from "../store/chats/selectors";

function ChatsListItem({ chatId, chatName, messages, handleOpen }) {
  const chatLastMessage = getChatLastMessage(messages, chatId);
  const dispatch = useDispatch();

  const handleClickRemove = useCallback(
    e => {
      e.stopPropagation();
      dispatch(removeChat(chatId));
    },
    [dispatch, chatId]
  );

  return (
    <React.Fragment key={chatId}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to={`/chats/${chatId}`}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={chatName}
            secondary={
              chatLastMessage && (
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {chatLastMessage.author}
                  </Typography>
                  {` — ${chatLastMessage.text}`}
                </>
              )
            }
          />
        </ListItem>
      </Link>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          onClick={handleClickRemove}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

export default function ChatsList({ handleOpen }) {
  const chats = useSelector(getChats);
  const messages = useSelector(getMessages);

  return (
    <List>
      {chats.map(({ id, name }) => (
        <ChatsListItem
          chatId={id}
          chatName={name}
          messages={messages}
          handleOpen={handleOpen}
        />
      ))}
    </List>
  );
}
