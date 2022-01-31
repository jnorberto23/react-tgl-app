import { StyledButton } from "./styled";

const GameButton = (props: any) => {
  const { action, color, children } = props;

  return (
    <StyledButton
      className="btn btn-sm"
      variant="light"
      color={color}
      onClick={action}
    >
      {children}
    </StyledButton>
  );
};

export default GameButton;
