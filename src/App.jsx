import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonContainer from "./components/ButtonsContainer.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "<--") {
      const dis = (calVal.slice(0,-1));
      setCalVal(dis);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

    // console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
