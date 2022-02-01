import { StyledButton } from "./styled";

const ControlButton = (props: any) => {
  const { action, children, color, opaque } = props;
  return (
    <StyledButton
      className={opaque ? `btn btn-sm` : `btn btn-sm mx-auto`}
      variant="light"
      color={color}
      onClick={action}
      opaque={opaque? 1 : 0}
    >
      {children}
    </StyledButton>
  );
};

export default ControlButton;
