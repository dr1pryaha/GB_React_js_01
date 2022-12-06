import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../store/chats/selectors";
import { addChat } from "../store/chats/action";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddChatDialog({ handleClose }) {
  const [newChatName, setNewChatName] = useState("");
  const handleChange = useCallback(e => setNewChatName(e.target.value));

  const dispatch = useDispatch();
  const chats = useSelector(getChats);

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    console.log(chats);
    setNewChatName("");
    handleClose();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <DialogTitle>Please enter a name for new chat</DialogTitle>
      <Item elevation={0}>
        <TextField autoFocus value={newChatName} onChange={handleChange} />
      </Item>
      <Button onClick={onAddChat} disabled={!newChatName}>
        Submit
      </Button>
    </>
  );
}
