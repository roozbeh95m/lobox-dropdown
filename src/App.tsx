import { useState } from "react";
import DropDownInput from "./components/DropDown";
import Layout from "./layout";

const App = () => {
  const [show, setShow] = useState(false);
  const onShowIconPress = () => {
    setShow(!show);
  };

  return (
    <Layout>
      <DropDownInput show={show} onClick={onShowIconPress} />
    </Layout>
  );
};

export default App;
