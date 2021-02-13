import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

import "./Footer.css";

const styles = makeStyles((theme) => ({
  footer__container: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = styles();

  return (
    <footer className={classes.footer__container}>
      <a href="https://github.com/libDrive/libDrive" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/62px-Font_Awesome_5_brands_github.svg.png"
          className="footer__github"
          height="55px"
        />
      </a>
      <a
        className="no_decoration_link footer__text"
        href="https://eliasbenb.github.io"
        target="_blank"
      >
        © 2021 Copyright: Elias Benbourenane
      </a>
    </footer>
  );
}