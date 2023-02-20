import { useEffect, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { createUseStyles } from "react-jss";
interface Props {
  show: boolean;
  onShowClick: () => void;
  onHideClick: () => void;
  onTextChange: (arg0: string) => void;
}
const useStyles = createUseStyles({
  dropDownInputLayout: {
    position: "relative",
  },
  input: {
    padding: 10,
    border: "1px solid lightGray",
    borderRadius: "5px",
    width: "200px",
  },
  iconHolder: {
    position: "absolute",
    top: 0,
    right: 10,
    bottom: 0,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const DropDownInput = (props: Props) => {
  const classes = useStyles();
  const { show, onShowClick, onHideClick, onTextChange } = props;
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length) {
      onTextChange(search);
      onShowClick();
    } else {
      onHideClick();
    }
  }, [search]);

  return (
    <div className={classes.dropDownInputLayout}>
      <input
        className={classes.input}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={classes.iconHolder}>
        {show ? (
          <FaAngleDown
            color="gray"
            fontSize={16}
            onClick={() => onHideClick()}
          />
        ) : (
          <FaAngleUp color="gray" fontSize={16} onClick={() => onShowClick()} />
        )}
      </div>
    </div>
  );
};

export default DropDownInput;
