import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { createUseStyles } from "react-jss";
interface Props {
  show: boolean;
  onClick:()=>void;
}
const useStyles = createUseStyles({
  dropDownLayout: {
    position: "relative",
  },
  input: {
    padding:10,
    border:"0px",
    borderRadius:"5px"
  },
  iconHolder: {
    position: "absolute",
    top: 0,
    right: 10,
    bottom:0,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const DropDownInput = (props: Props) => {
  const classes = useStyles();
  const { show,onClick } = props;

  return (
    <div className={classes.dropDownLayout}>
      <input className={classes.input} />
      <div className={classes.iconHolder} onClick={()=>onClick()}>
        {show ? <FaAngleDown color="gray" fontSize={16} /> : <FaAngleUp color="gray" fontSize={16}/>}
      </div>
    </div>
  );
};

export default DropDownInput;
