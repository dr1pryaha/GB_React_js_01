import logo from "./logo.svg";
import React, { useState, useCallback, useEffect } from "react";
import "./App.scss";
import MessageItem from "./components/Message";

function App() {
  const [messageList, setMessagesList] = useState([
    { id: 1, text: "message 1", author: "admin" },
    { id: 2, text: "message 2", author: "user1" },
    { id: 3, text: "message 3", author: "user2" },
  ]);

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
          ...messageList,
          {
            id: messageList.length + 1,
            text: inputValue,
            author: "unknown",
          },
        ];
        setInputValue("");
        setMessagesList(arr);
      } else {
        alert("Введите текст сообщения");
      }
    },
    [setMessagesList, inputValue, messageList]
  );

  useEffect(() => {
    if (messageList[messageList.length - 1].author !== "robot") {
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Мои сообщения:</p>
        {messageList.map(({ text, id, author }) => (
          <MessageItem text={text} key={id} author={author} />
        ))}
      </header>
      <form action="textarea1.php" method="post">
        <p>
          <b>Введите ваше сообщение:</b>
        </p>
        <p>
          <textarea
            rows="10"
            cols="80"
            name="text"
            value={inputValue}
            onChange={handleTextAreaChange}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Отправить" onClick={handleButtonClick} />
        </p>
      </form>
    </div>
  );
}

export default App;
