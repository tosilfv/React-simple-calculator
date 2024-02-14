import { ButtonRow } from "./ButtonRow";

export const Calculator = ({
  handleCurrentNum,
  handleOperator,
  handleReset,
  handleResult,
}) => {
  return (
    <table>
      <tbody>
        <ButtonRow
          td1={{
            identifier: "ce/c",
            value: "0",
            handleClick: handleReset,
          }}
          td2={{ className: "black" }}
          td3={{ className: "black" }}
          td4={{
            identifier: "/",
            value: "/",
            handleClick: handleOperator,
          }}
        />
        <ButtonRow
          td1={{
            identifier: "7",
            value: "7",
            handleClick: handleCurrentNum,
          }}
          td2={{
            identifier: "8",
            value: "8",
            handleClick: handleCurrentNum,
          }}
          td3={{
            identifier: "9",
            value: "9",
            handleClick: handleCurrentNum,
          }}
          td4={{
            identifier: "*",
            value: "*",
            handleClick: handleOperator,
          }}
        />
        <ButtonRow
          td1={{
            identifier: "4",
            value: "4",
            handleClick: handleCurrentNum,
          }}
          td2={{
            identifier: "5",
            value: "5",
            handleClick: handleCurrentNum,
          }}
          td3={{
            identifier: "6",
            value: "6",
            handleClick: handleCurrentNum,
          }}
          td4={{
            identifier: "-",
            value: "-",
            handleClick: handleOperator,
          }}
        />
        <ButtonRow
          td1={{
            identifier: "1",
            value: "1",
            handleClick: handleCurrentNum,
          }}
          td2={{
            identifier: "2",
            value: "2",
            handleClick: handleCurrentNum,
          }}
          td3={{
            identifier: "3",
            value: "3",
            handleClick: handleCurrentNum,
          }}
          td4={{
            identifier: "+",
            value: "+",
            handleClick: handleOperator,
          }}
        />
        <ButtonRow
          td1={{
            identifier: "0",
            value: "0",
            handleClick: handleCurrentNum,
          }}
          td2={{ className: "black" }}
          td3={{ className: "black" }}
          td4={{
            identifier: "=",
            value: "=",
            handleClick: handleResult,
          }}
        />
      </tbody>
    </table>
  );
};
