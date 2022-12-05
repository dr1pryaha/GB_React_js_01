import React from "react";
import { Route, redirect } from "react-router-dom";
import { ChatsContainer } from "../containers/ChatsContainer";
export default function PublicRoute({ authenticated, children }) {
  return children;
}
