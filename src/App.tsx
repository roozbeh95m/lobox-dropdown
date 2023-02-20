import { useEffect, useState } from "react";
import Description from "./components/Description";
import DropDownInput from "./components/DropDownInput";
import DropDownList from "./components/DropDownList";
import useKeyDown from "./hooks/useKeyDown";
import Layout from "./layout";

const App = () => {
  const [show, setShow] = useState(false);
  const [textTemp, setTextTemp] = useState("");
  const onShowIconPress = () => {
    setShow(true);
  };
  const onHideIconPress = () => {
    setShow(false);
  };
  const onTextChange = (text: string) => {
    setTextTemp(text);
  };
  const onItemClick = (text: string) => {
    setTextTemp(text);
  };
  const enterPressed = useKeyDown("Enter");
  let itemsList = [
    "book",
    "apple is good",
    "text me",
    "oh my god",
    "this is right",
    "my world",
    "trust in god",
    "dance with me",
    "hide in the dark",
    "trun left to",
  ];
  const [items, setItems] = useState(itemsList);
  useEffect(() => {
    if (enterPressed === true && textTemp.length) {
      if (items.indexOf(textTemp) === -1) {
        setItems([...items, textTemp]);
        setTextTemp("");
      } else {
        alert("item already exist");
      }
    }
  }, [enterPressed]);

  return (
    <Layout>
      <Description/>
      <DropDownInput
        show={show}
        onShowClick={onShowIconPress}
        onHideClick={onHideIconPress}
        textTemp={textTemp}
        onTextChange={(text: string) => onTextChange(text)}
      />
      <DropDownList
        show={show}
        items={items}
        onItemClick={(text: string) => onTextChange(text)}
      />
    </Layout>
  );
};

export default App;
