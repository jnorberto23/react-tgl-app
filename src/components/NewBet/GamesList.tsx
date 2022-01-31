import { Fragment } from "react";
import GameButton from "../UI/GameButton/GameButton";

const GamesList = (props: any) => {
  const games: any = props.games;
  const action = props.action;
  
  return (
    <Fragment>
      {games.map((game: any) => {
        return (
          <GameButton
            action={action}
            color={game.color}
            id={game.id}
            value={game.type}
            key={game.id}
          />
        );
      })}
    </Fragment>
  );
};

export default GamesList;
