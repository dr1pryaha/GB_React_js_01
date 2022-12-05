import React, { useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Login } from "../components/Login";
export default function PrivateRoute({ authenticated, children }) {
  // const navigate = useNavigate();
  // useEffect(() => navigate("/login"));
  return authenticated ? children : <Login />;
}
