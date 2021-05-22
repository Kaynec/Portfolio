import React, { useState, useEffect } from "react";
import { useStyles } from "./styles.js";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
} from "@material-ui/core";

const projectInformation = [
  {
    name: "Weather App ",
    code: "https://github.com/Kaynec/Weather-App",
    Live: "https://kaynec.github.io/Weather-App",
    screenShot: "https://i.ibb.co/TWCVZDP/1.jpg",
    description: "Minimalist Weather App Made With Javascript And Scss ",
    stack: "Javascript , Scss  ,Webpack , Open Weather Api ",
  },
  {
    name: "Shopping Card App ",
    code: "https://github.com/Kaynec/shoppingcart/",
    Live: "https://kaynec.github.io/shoppingcart/#/",
    screenShot: "https://i.ibb.co/XYfwyS6/3.jpg",
    description: "Simple Shopping Page Built With React And Sass",
    stack: " Sass React React-Router-Dom ",
  },
  {
    name: "CV Maker ",
    code: "https://github.com/Kaynec/cvmaker",
    Live: "https://kaynec.github.io/cvmaker ",
    screenShot: "https://i.ibb.co/6mxWMnv/5.jpg",
    description: "Cv Maker App with Preview Mode And Pdf Download Option ",
    stack: " react , sass  ",
  },
];

//

const Projects = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Grid
      id="Projects"
      className={classes.Projects}
      container
      className={classes.GridContainer}
    >
      <Typography
        data-aos="fade-left"
        variant="h3"
        gutterBottom
        color="secondary"
      >
        PROJECTS
      </Typography>
      {projectInformation.map((project) => {
        return (
          <Card
            data-aos="fade-up"
            className={classes.cardItem}
            style={{ width: "100%" }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" color="primary">
                  {project.name}
                </Typography>
                <Typography variant="p" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardMedia
                alt="GeeksforGeeks"
                component="img"
                className={classes.cardImage}
                image={project.screenShot}
              />
            </CardActionArea>
            <CardActions>
              <Button
                size="large"
                color="secondary"
                onClick={() => window.open(project.Live)}
              >
                View Live
              </Button>
              <Button
                onClick={() => window.open(project.code)}
                size="large"
                color="primary"
              >
                Code
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
export default Projects;
