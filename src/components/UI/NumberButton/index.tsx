import { StyledButton } from "./styled";

const NumberButton = (props: any) => {
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

export default NumberButton;
