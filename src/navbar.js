import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  AppBar: {
    display: "flex",
    justifyItems: "flex-end",
    justifyContent: "flex-end",
    background: "transparent",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginInline: ".5rem",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      {/* <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="end"
            aria-label="menu"
            className={classes.AppBar}
          ></IconButton>
          <Button className={classes.button}>About</Button>
          <Button className={classes.button}>Projects</Button>
        </Toolbar>
      </AppBar> */}
      <nav className="nav-bar">
        <a href="#">Logo</a>
        <ul>
          <li>
            <a href="#Home">Home</a>{" "}
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact Me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
