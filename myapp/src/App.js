import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Page404 from "./components/Page404";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CircularProgress from "@mui/material/CircularProgress";
import { store, persistor } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatsContainer } from "./containers/ChatsContainer";

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
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/chats/:chatId" element={<ChatsContainer />}></Route>
            <Route path="/chats/" element={<ChatsContainer />}></Route>
            <Route path="/notFound" element={<Page404 />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
