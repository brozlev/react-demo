import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Dogs } from "../pages/Dogs";
import { Login } from "../pages/Login";

// Setup of React Router routes
// https://reactrouterdotcom.fly.dev/docs/en/v6/components/routes
export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dogs" element={<Dogs />} />
      </Routes>
  );
}