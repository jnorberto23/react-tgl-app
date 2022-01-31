import { StyledButton } from "./styled";

const GameButton = (props: any) => {
  const { action, value } = props;
  return (
    <StyledButton
      className="btn btn-sm"
      variant="light"
      color={value.color}
      onClick={action.bind(null, value)}
    >
      {value.type}
    </StyledButton>
  );
};

export default GameButton;
