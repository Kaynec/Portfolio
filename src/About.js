import React from "react";
import { motion } from "framer-motion";
import { useStyles } from "./styles.js";
import css from "./images/css.svg";
import git from "./images/git.svg";
import html from "./images/html.svg";
import sass from "./images/sass.svg";
import webpack from "./images/webpack.svg";
import js from "./images/js.svg";
import react from "./images/react.svg";
import { Typography, Button } from "@material-ui/core";
export const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.About} id="About">
        <div className={classes.AboutText}>
          <Typography variant="h4" style={{ display: "block" }}>
            Hello, my name is
          </Typography>
          <Typography
            variant="h3"
            style={{ fontWeight: "400" }}
            component={motion.h3}
            initial={{ y: "1000px" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Ali Ozbak
          </Typography>

          <Typography
            variant="h4"
            component={motion.h4}
            initial={{ y: "1000px" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            i am a{" "}
            <strong style={{ color: "#fca311", padding: ".5rem" }}>
              Web Developer
            </strong>
          </Typography>
        </div>
        <div className={classes.scrollDownBtn}>
          <Button href="#Projects" variant="contained" color="primary">
            View Projects
          </Button>
        </div>
        <div className={classes.skills}>
          <h2 style={{ textAlign: "center" }}>
            <strong style={{ borderBottom: "2px solid cyan" }}>Skills</strong>{" "}
          </h2>

          <div className={classes.svgDiv}>
            <img className={classes.svg} width="50px" src={html} />
            <img className={classes.svg} width="50px" src={css} />
            <img className={classes.svg} width="50px" src={js} />
            <img className={classes.svg} width="50px" src={react} />
            <img className={classes.svg} width="50px" src={sass} />
            <img className={classes.svg} width="50px" src={git} />
            <img className={classes.svg} width="50px" src={webpack} />
          </div>
        </div>
      </div>
    </>
  );
};
