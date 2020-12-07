import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, -50%)",
      marginTop: theme.spacing(4),
    },
  },
}));

export default function PageMenu(props) {
  const classes = useStyles();
  let { page, pages } = props.props;
  return (
    <div className={classes.root}>
      <Pagination
        page={page}
        count={pages}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <a
            href={`${window.location.pathname}${
              item.page === 1 ? "" : `?page=${item.page}`
            }`}
            className="no_decoration_link"
          >
            <PaginationItem {...item} />
          </a>
        )}
      />
    </div>
  );
}