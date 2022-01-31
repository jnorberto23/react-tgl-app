import { Col, Row } from "react-bootstrap";
import GameButton from "../components/UI/GameButton/GameButton";
import SubTitle from "../components/UI/SubTitle/SubTitle";
import Title from "../components/UI/Title/Title";
import Text from "../components/UI/Text/Text";
import NumbersList from "../components/NewBet/NumbersList";

const Bet = () => {
  const gameNumbers: number[] = [1, 2, 4, 5, 6, 7, 8, 9];
  return (
    <Row>
      <Col xs={12} md={8}>
        <Title prefix="New bet">For Mega Sena</Title>
        <SubTitle>Choose a game</SubTitle>
        <GameButton color="#01AC66">Lotofacil</GameButton>
        <GameButton color="#7F3992">MegaSena</GameButton>
        <GameButton color="#F79C31">Lotomania</GameButton>
        <SubTitle>Fill Your Bet</SubTitle>
        <Text>
          Escolha 15 números para apostar na lotofácil. Você ganha acertando 11,
          12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você
          joga de onde estiver!
        </Text>
        <NumbersList numbers={gameNumbers} />
      </Col>
      <Col xs={12} md={4}>
        <Text>Cart</Text>
      </Col>
    </Row>
  );
};

export default Bet;
