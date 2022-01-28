import Button from "../components/UI/Button/Button";
import SubTitle from "../components/UI/SubTitle/SubTitle";
import Title from "../components/UI/Title/Title";

const Bet = () => {
  return (
    <>
      <Title prefix="New bet">For Mega Sena</Title>
      <SubTitle>Choose a game</SubTitle>
      <Button color="#01AC66">Lotofacil</Button>
      <Button color="#7F3992">MegaSena</Button>
      <Button color="#F79C31">Lotomania</Button>
      <SubTitle>
        Escolha 15 números para apostar na lotofácil. Você ganha acertando 11,
        12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você
        joga de onde estiver!
      </SubTitle>
    </>
  );
};

export default Bet;
