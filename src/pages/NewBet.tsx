import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import SubTitle from "../components/UI/SubTitle/SubTitle";
import Title from "../components/UI/Title/Title";
import Text from "../components/UI/Text/Text";
import NumbersList from "../components/NewBet/NumbersList";
import GamesList from "../components/NewBet/GamesList";
import { useEffect, useState } from "react";
import { fetchGameData } from "../store/game-actions";

const Bet = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootStateOrAny) => state.game);

  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  console.log('game',game)

  const games: any[] = [
    {
      id: 1,
      color: "#01AC66",
      type: "Lotofacil",
      numbers: [1, 2, 4, 5, 6, 7, 8, 9],
    },
    {
      id: 2,
      color: "#7F3992",
      type: "MegaSena",
      numbers: [1, 2, 5, 66, 22],
    },
    {
      id: 3,
      color: "#F79C31",
      type: "Lotomania",
      numbers: [15, 22, 51, 166, 222],
    },
  ];
  const [selectedGame, setSelectedGame] = useState({
    color: "#01AC66",
    type: "Lotofacil",
    description:
      "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11",
    numbers: [1, 2, 4, 5, 6, 7, 8, 9],
  });

  const handleChangeGame = () => {
    return setSelectedGame({
      color: "#F79C31",
      type: "Lotomania",
      description: "Escolha 15 números para apostar na lotofáci",
      numbers: [15, 22, 51, 166, 222],
    });
  };
  return (
    <Row>
      <Col xs={12} md={8}>
        <Title prefix="New bet">{"for " + selectedGame.type}</Title>
        <SubTitle>Choose a game</SubTitle>
        <GamesList games={games} action={handleChangeGame} />
        <SubTitle>Fill Your Bet</SubTitle>
        <Text>{selectedGame.description}</Text>
        <NumbersList numbers={selectedGame.numbers} />
      </Col>
      <Col xs={12} md={4}>
        <Text>Cart</Text>
      </Col>
    </Row>
  );
};

export default Bet;
