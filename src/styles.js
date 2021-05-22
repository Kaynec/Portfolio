import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    footerIcons: {
      fontSize: "large",
    },
    footer: {
      padding: "3rem",
      marginTop: "10rem",
      borderTop: "2px solid cyan ",
    },
    GridContainer: {
      width: "100%",
    },
    cardItem: {
      width: "100vw ",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      borderBottom: "2px solid #e1e1e1",
    },
    cardImage: {
      width: "75%",
      height: "auto",
      margin: "0 auto",
      border: "3px solid #e1e1e1",
      borderRadius: "2%",
    },
    svgDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      marginTop: "3rem",
      flexWrap: "wrap",
    },
    svg: {
      "&:hover": {
        transform: "scale(1.1)",
        background: "#e1e1e1",
      },
    },
    skills: {
      marginTop: "20rem",
      paddingBottom: "3rem",
      borderBottom: "2px solid cyan",
    },
    Projects: {
      width: "100%",
    },
    scrollDownBtn: {
      marginLeft: "4%",
    },
    About: {
      minHeight: "100vh",
    },
    AboutText: {
      padding: "2rem",
      marginTop: "2.5rem",
    },
    AppBar: {
      marginTop: "2.5rem",
      background: "transparent",
      margin: "0 auto",
      boxShadow: "none",
    },
    Toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    Link: {
      padding: "1rem",
      color: "black",
      fontSize: "1.2rem",
      textDecoration: "none",
      curser: "pointer",
      transition: "all .15s ease",
      "&:active": {
        borderBottom: "2px solid wheat",
      },
      "&:hover": {
        curser: "pointer",
        color: "#fca311",
      },
    },
    GitHubIcon: {
      color: "black",
      paddingInline: ".25rem",
      fontSize: "2.5rem",

      "&:hover": {
        curser: "pointer",
      },
    },
  })
);
