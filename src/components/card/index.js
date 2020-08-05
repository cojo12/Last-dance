import React from "react";
import CardHeading from "../cardHeader/index";
import CrdBody from "../CardBody/index";
import {
  Card, Col
} from 'reactstrap';

function ItineraryCard() {
return (
  <div>
    <Col sm="6">
      <Card>
        <CardHeading />
        <CrdBody />
      </Card>
    </Col>
  </div>
)
}

export default ItineraryCard;