import { ButtonGame } from "./styled";

const Buttons = (props: any) => {
  const { action, color, children } = props;

  return (
    <ButtonGame
      className="btn btn-sm"
      variant="light"
      color={color}
      onClick={action}
    >
      {children}
    </ButtonGame>
  );
};

export default Buttons;
