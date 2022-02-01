import { Row } from "react-bootstrap";
import { StyledText } from "./styled";

const SelectedNumbersLabel = (props: { range: number; numbers: number[] }) => {
  return (
    <Row>
      <StyledText>
        {`(${props.numbers.length}/${props.range}) ${props.numbers.join("-")}`}
      </StyledText>
    </Row>
  );
};

export default SelectedNumbersLabel;
