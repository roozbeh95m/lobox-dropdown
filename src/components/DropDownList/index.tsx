import React from "react";
import { createUseStyles } from "react-jss";

type Props = {
  show: boolean;
  items: string[];
  onItemClick: (arg0: string) => void;
};
const useStyles = createUseStyles({
  dropDownListLayout: {
    width: "200px",
    backgroundColor: "#FFFF",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginTop: 5,
    borderRadius: 5,
    border: "1px solid lightGray",
    maxHeight: "200px",
    overflow: "scroll",
  },
  item: {
    padding: "10px 3px",
    color:"gray",
    "&:hover": {
      background: "lightblue",
      color: "blue",
      borderRadius: 5,
    },
  },
});
const DropDownList = (props: Props) => {
  const classes = useStyles();
  const { show, items, onItemClick } = props;

  if (show) {
    return (
      <div className={classes.dropDownListLayout}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.item}
              onClick={() => onItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default DropDownList;
