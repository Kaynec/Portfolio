import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Navbar } from "./navbar";
export const App = () => {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <Navbar />
    </>
  );
};
