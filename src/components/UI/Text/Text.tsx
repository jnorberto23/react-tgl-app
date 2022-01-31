import { Row } from "react-bootstrap";
import { StyledText } from "./styled";

const Text = (props: { children: string }) => {
  return (
    <Row>
      <StyledText>{props.children}</StyledText>
    </Row>
  );
};

export default Text;
