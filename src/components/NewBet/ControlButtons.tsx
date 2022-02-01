import { Fragment } from "react";
import { Row } from "react-bootstrap";
import ControlButton from "../UI/ControlButton";

const ControlButtons = () => {
  return (
    <Fragment>
      <Row>
        <ControlButton color="#27C383" opaque={true}>
          Complete Game
        </ControlButton>
        <ControlButton color="#27C383" opaque={true}>
          Clear Game
        </ControlButton>
        <ControlButton color="#27C383" opaque={false}>
          Add to cart
        </ControlButton>
      </Row>
    </Fragment>
  );
};

export default ControlButtons;
