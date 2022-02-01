import { Fragment } from "react";
import NumberButton from "../UI/NumberButton/NumberButton";

const NumbersList = (props: { range: number }) => {
  const { range } = props;
  let numbers: number[] = [];

  for (let i = 1; i <= range; i++) {
    numbers.push(i);
  }
  return (
    <Fragment>
      {numbers.map((number: any) => {
        return <NumberButton key={number}>{number}</NumberButton>;
      })}
    </Fragment>
  );
};

export default NumbersList;
