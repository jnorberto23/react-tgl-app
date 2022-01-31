import { Fragment } from "react";
import { changeGameContext } from "../../store/game-actions";
import { useDispatch } from "react-redux";
import GameButton from "../UI/GameButton/GameButton";

const GamesList = (props: any) => {
  const dispatch = useDispatch();
  const games: any = props.games;
  const action = props.action;

  const handleGameChange = (id: any) => {
    dispatch(changeGameContext(id));
  };

  return (
    <Fragment>
      {games.map((game: any) => {
        return (
          <GameButton action={handleGameChange} value={game} key={game.id} />
        );
      })}
    </Fragment>
  );
};

export default GamesList;
