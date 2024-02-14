import { useEffect, useState } from "react";
import { Calculator } from "./components/Calculator";
import { enterKey, numbers, operators } from "./utils/helpers";
import "./App.css";

function App() {
  const [currentNum, setCurrentNum] = useState("0");
  const [num1, setNum1] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const keyDownHandler = (evt) => {
      evt.preventDefault();
      if (numbers.includes(evt.key)) {
        handleCurrentNum(evt.key);
      }
      if (operators.includes(evt.key)) {
        handleOperator(evt.key);
      }
      if (evt.key === enterKey) {
        handleResult();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [currentNum]);

  const handleCurrentNum = (num) => {
    let newNum = removeFirstZero(`${currentNum}${num}`);
    if (newNum === "") {
      setCurrentNum("0");
    } else {
      setCurrentNum(newNum);
    }
    setResult("");
  };

  const handleOperator = (opr) => {
    // Add to previous result:
    if (result !== "") {
      setVariables("", result, opr, "notset");
      return;
    }
    // Do not add to previous result:
    setVariables("", currentNum, opr, currentNum);
  };

  const handleReset = () => {
    setVariables("0", "", "", "");
  };

  const handleResult = () => {
    if (result === "") {
      let res = eval(num1 + operator + currentNum);
      setVariables("0", "", "", res);
    }
  };

  const removeFirstZero = (str) => {
    return str.charAt(0) === "0" ? str.substring(1) : str;
  };

  const setVariables = (cn, n1, op, rt) => {
    cn !== "notset" && setCurrentNum(cn);
    n1 !== "notset" && setNum1(n1);
    op !== "notset" && setOperator(op);
    rt !== "notset" && setResult(rt);
  };

  return (
    <>
      <div className="calculator">
        <div className="screen">{result !== "" ? result : currentNum}</div>
        <Calculator
          handleCurrentNum={handleCurrentNum}
          handleOperator={handleOperator}
          handleReset={handleReset}
          handleResult={handleResult}
        />
      </div>
    </>
  );
}

export default App;
