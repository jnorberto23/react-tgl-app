import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import SubTitle from "../components/UI/SubTitle/SubTitle";
import Title from "../components/UI/Title/Title";
import Text from "../components/UI/Text/Text";
import GamesList from "../components/NewBet/GamesList";
import { useEffect } from "react";
import { fetchGameData } from "../store/game-actions";
import NumbersList from "../components/NewBet/NumbersList";

const Bet = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state: RootStateOrAny) => state.game);

  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  const games: any[] = [
    {
      id: 1,
      type: "Lotofácil",
      description:
        "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      range: 25,
      price: 2.5,
      max_number: 15,
      color: "#7F3992",
      created_at: "2022-01-31T15:27:41.000-03:00",
      updated_at: "2022-01-31T15:27:41.000-03:00",
    },
    {
      id: 2,
      type: "Mega-Sena",
      description:
        "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      range: 60,
      price: 4.5,
      max_number: 6,
      color: "#01AC66",
      created_at: "2022-01-31T15:27:41.000-03:00",
      updated_at: "2022-01-31T15:27:41.000-03:00",
    },
    {
      id: 3,
      type: "Quina",
      description:
        "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      range: 80,
      price: 2,
      max_number: 5,
      color: "#F79C31",
      created_at: "2022-01-31T15:27:41.000-03:00",
      updated_at: "2022-01-31T15:27:41.000-03:00",
    },
  ];

  return (
    <Row>
      <Col xs={12} md={8}>
        <Title prefix="New bet">{"for " + selectedGame.type}</Title>
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
