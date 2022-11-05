import React, { useState, useCallback, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function SendMessageForm(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
        const arr = [
          ...props.messageList,
          {
            id: props.messageList.length + 1,
            text: inputValue,
            author: "unknown",
          },
        ];
        setInputValue("");
        props.setMessagesList(arr);
      } else {
        alert("Введите текст сообщения");
      }
    },
    [props.setMessagesList, inputValue, props.messageList]
  );

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
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
          <TextField
            inputRef={inputRef}
            value={inputValue}
            onChange={handleTextAreaChange}
            fullWidth
            label="Текст сообщения"
            id="fullWidth"
          />
          <Grid item>
            <Button variant="contained" onClick={handleButtonClick}>
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
