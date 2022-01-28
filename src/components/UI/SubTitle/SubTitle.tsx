import { Row } from "react-bootstrap";
import { StyledSubTitle } from "./styled";

const SubTitle = (props: { children: string }) => {
  return (
    <Row>
      <StyledSubTitle>{props.children}</StyledSubTitle>
    </Row>
  );
};

export default SubTitle;
