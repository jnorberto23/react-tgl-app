import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import SubTitle from "../components/UI/SubTitle/SubTitle";
import Title from "../components/UI/Title/Title";
import Text from "../components/UI/Text/Text";
import GamesList from "../components/NewBet/GamesList";
import { useEffect, useState } from "react";
import { fetchGameData } from "../store/game-actions";
import NumbersList from "../components/NewBet/NumbersList";
import { GetAllGames } from "../lib/api";

const Bet = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state: RootStateOrAny) => state.game);

  const [games, setGames] = useState([]);

  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  useEffect(() => {
    GetAllGames().then((response) => setGames(response.types));
  }, []);

  return (
    <Row>
      <Col xs={12} md={8}>
        <Title prefix="New bet for">{selectedGame.type}</Title>
        <SubTitle>Choose a game</SubTitle>
        <GamesList games={games} />
        <SubTitle>Fill Your Bet</SubTitle>
        <Text>{selectedGame.description}</Text>
        <NumbersList range={selectedGame.range} />
      </Col>
      <Col xs={12} md={4}>
        <Text>Cart</Text>
      </Col>
    </Row>
  );
};

export default Bet;
