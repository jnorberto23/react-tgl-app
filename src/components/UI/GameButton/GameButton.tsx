import { StyledButton } from "./styled";

const GameButton = (props: any) => {
  const { action, color, value } = props;
  return (
    <StyledButton
      className="btn btn-sm"
      variant="light"
      color={color}
      onClick={action}
    >
      {value}
    </StyledButton>
  );
};

export default GameButton;
