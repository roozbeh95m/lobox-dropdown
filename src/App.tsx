import { useState } from "react";
import DropDownInput from "./components/DropDownInput";
import DropDownList from "./components/DropDownList";
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
  let items = [
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
  
  return (
    <Layout>
      <DropDownInput
        show={show}
        onShowClick={onShowIconPress}
        onHideClick={onHideIconPress}
        onTextChange={(text: string) => onTextChange(text)}
      />
      <DropDownList show={show} items={items} />
    </Layout>
  );
};

export default App;
