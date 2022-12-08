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
import { APIComponent } from "./components/APIComponent";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import PublicRoute from "./hocs/PublicRoute";
import { auth } from "../services/firebase";
import PrivateRoute from "./hocs/PrivateRoute";

function App() {
  const [authed, setAuthed] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      user => {
        if (user) {
          setAuthed(true);
        } else {
          setAuthed(false);
        }
      },
      []
    );
  }, []);

  return authed === undefined ? (
    <CircularProgress />
  ) : (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute authenticated={authed}>
                  <Home />
                </PublicRoute>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={
                <PublicRoute authenticated={authed}>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <PublicRoute authenticated={authed}>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/gists"
              element={
                <PublicRoute authenticated={authed}>
                  <APIComponent />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute authenticated={authed}>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/chats/:chatId"
              element={
                <PrivateRoute authenticated={authed}>
                  <ChatsContainer />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/chats/"
              element={
                <PrivateRoute authenticated={authed}>
                  <ChatsContainer />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/notFound"
              element={
                <PrivateRoute authenticated={authed}>
                  <Page404 />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="*"
              element={
                <PrivateRoute authenticated={authed}>
                  <Page404 />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
