import { Fragment } from "react";
import NumberButton from "../UI/NumberButton/NumberButton";

const NumbersList = (props: any) => {
  const numbers: any = props.numbers;

  return (
    <Fragment>
      {numbers.map((number: any) => {
        return <NumberButton key={number}>{number}</NumberButton>;
      })}
    </Fragment>
  );
};

export default NumbersList;
