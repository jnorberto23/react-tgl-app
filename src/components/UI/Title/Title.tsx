import { Row } from "react-bootstrap";
import { StyledTitle } from "./styled";

const Title = (props: { children: string; prefix: string }) => {
  return (
    <Row>
      <StyledTitle>
        {props.prefix} {props.children}
      </StyledTitle>
    </Row>
  );
};

export default Title;
