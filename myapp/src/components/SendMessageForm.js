import React, { useState, useCallback, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function SendMessageForm({
  messageList,
  chatsList,
  addMessageToChat,
  setChatsList,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    shadows: "none",
  }));

  const [inputValue, setInputValue] = useState("");

  const handleTextAreaChange = useCallback(
    event => {
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const handleButtonClick = useCallback(
    event => {
      event.preventDefault();
      if (inputValue !== "") {
        addMessageToChat({
          id: messageList.length + 1,
          text: inputValue,
          author: "user",
        });
        setInputValue("");
      } else {
        alert("Введите текст сообщения");
      }
    },
    [inputValue, setInputValue, messageList, addMessageToChat]
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid sx={{ width: "100%" }} item xs={11}>
            <Item elevation={0}>
              <TextField
                inputRef={inputRef}
                key="password"
                autoFocus
                value={inputValue}
                onChange={handleTextAreaChange}
                rows="3"
                fullWidth
                label="Текст сообщения"
                id="fullWidth"
              />
            </Item>
          </Grid>
          <Grid sx={{ paddingTop: "8px" }} item xs={6} md={3}>
            <Item elevation={0}>
              <Button variant="contained" onClick={handleButtonClick}>
                Отправить
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
