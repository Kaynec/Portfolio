import { Typography, Link, Container } from "@material-ui/core";
import { Navbar } from "./navbar";
import Projects from "./Projects";
import { About } from "./About";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./Contact";
//
export const App = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1500);
  }, []);
  //
  if (done === false) {
    return (
      <div>
        <ReactLoading
          style={{
            color: "white",
            maxWidth: "15vw",
            margin: "0 auto",
            marginTop: "40vh",
          }}
          type={"bars"}
          color={"white"}
        />
      </div>
    );
  } else {
    return (
      <>
        <Container
          component={motion.div}
          initial={{ x: "1000px" }}
          animate={{ x: 0 }}
          delay={1}
          transition={{ type: "spring", stiffness: 100 }}
          maxWidth="sm"
        >
          <Navbar />
          <About />
          <Projects />
          <Contact />
        </Container>
      </>
    );
  }
};
