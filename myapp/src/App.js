import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Page404 from "./components/Page404";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [chatsList, setChatsList] = useState([
  //   {
  //     id: 1,
  //     name: "Brunch this weekend?",
  //     messages: [{ text: "FirstMessage", author: "Ali Connors" }],
  //   },
  //   {
  //     id: 2,
  //     name: "Summer BBQ",
  //     messages: [{ text: "SecondMessage", author: "Ben Aflec" }],
  //   },
  //   {
  //     id: 3,
  //     name: "Oui Oui",
  //     messages: [{ text: "ThirdMessage", author: "Sarah Conor" }],
  //   },
  // ]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/chats/:chatId" element={<Chats />}></Route>
          <Route path="/chats/" element={<Chats />}></Route>
          <Route path="/notFound" element={<Page404 />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
