import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { AppBar, Toolbar, IconButton, Link } from "@material-ui/core";
import { useStyles } from "./styles.js";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <div>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/ali-ozbak-26884120b/")
              }
            >
              <LinkedInIcon
                className={classes.GitHubIcon}
                aria-label="https://www.linkedin.com/in/ali-ozbak-26884120b/"
              >
                <LinkedInIcon fontSize="large" />
              </LinkedInIcon>
            </IconButton>
            <IconButton
              onClick={() => window.open("https://github.com/Kaynec")}
            >
              <GitHubIcon
                className={classes.GitHubIcon}
                aria-label="https://github.com/Kaynec"
              >
                <GitHubIcon fontSize="large" />
              </GitHubIcon>
            </IconButton>
          </div>
          <div>
            <Link className={classes.Link} href="#">
              About
            </Link>
            <Link className={classes.Link} href="#Projects">
              Projects
            </Link>
            <Link className={classes.Link} href="#Contact">
              Contact Me
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
