import { StyledButton } from "./styled";

const GameButton = (props: any) => {
  const { action, value, enabled } = props;
  return (
    <StyledButton
      className="btn btn-sm"
      variant="light"
      color={value.color}
      onClick={action.bind(null, value)}
    >
      {console.log(value, enabled)}
      {value.type}
    </StyledButton>
  );
};

export default GameButton;