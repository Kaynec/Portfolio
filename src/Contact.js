import React, { useState, useEffect } from "react";
import { useStyles } from "./styles.js";
import { Typography, Button, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
//
const Contact = () => {
  const classes = useStyles();
  return (
    <footer
      id="Contact"
      style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      className={classes.footer}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Wanna Work With Me ?
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">My LinkedIn :</Typography>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/ali-ozbak-26884120b/")
            }
          >
            <LinkedInIcon
              className={classes.footerIcons}
              aria-label="https://www.linkedin.com/in/ali-ozbak-26884120b/"
            >
              <LinkedInIcon fontSize="large" />
            </LinkedInIcon>
          </IconButton>
        </div>
        {/*  */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">My GitHub :</Typography>
          <IconButton onClick={() => window.open("https://github.com/Kaynec")}>
            <GitHubIcon
              className={classes.footerIcons}
              aria-label="https://github.com/Kaynec"
            >
              <GitHubIcon fontSize="large" />
            </GitHubIcon>
          </IconButton>
        </div>

        {/*  */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">My Email:</Typography>
          <IconButton onClick={() => window.open("https://github.com/Kaynec")}>
            <EmailIcon
              className={classes.footerIcons}
              aria-label="https://github.com/Kaynec"
            >
              <GitHubIcon fontSize="large" />
            </EmailIcon>
          </IconButton>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
