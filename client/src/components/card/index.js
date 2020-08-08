import React from "react";
import CardHeading from "../cardHeader";
import CrdBody from "../CardBody";
import "./style.css";
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