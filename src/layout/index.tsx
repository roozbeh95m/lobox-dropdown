import React from "react";
import { createUseStyles } from "react-jss";

type Props = {
  children: React.ReactNode;
};
const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    minHeight: "100vh",
  },
});
const Layout = (props: Props) => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
