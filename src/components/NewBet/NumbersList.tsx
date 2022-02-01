import { Fragment, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeSelectedNumbers } from "../../store/game-actions";
import NumberButton from "../UI/NumberButton";
import SelectedNumbersLabel from "../UI/SelectedNumbersLabel";

const NumbersList = (props: { range: number }) => {
  const dispatch = useDispatch();
  const selectedNumber = useSelector(
    (state: RootStateOrAny) => state.game.selectedNumbers
  );

  let numbers: number[] = [];
  for (let i = 1; i <= props.range; i++) numbers.push(i);

  const handleClickNumberButton = (number: any) => {
    dispatch(changeSelectedNumbers(number));
    console.log(number);
  };

  console.log("numberos selectionados", selectedNumber);

  return (
    <Fragment>
      {numbers.map((number: any) => {
        return (
          <NumberButton action={handleClickNumberButton} key={number}>
            {number}
          </NumberButton>
        );
      })}
      <SelectedNumbersLabel range={props.range} numbers={selectedNumber} />
    </Fragment>
  );
};

export default NumbersList;
