import React from "react";
import CardHeading from "../cardHeader";
import CrdBody from "../CardBody";
import "./style.css";
import {
  Card, Col
} from 'reactstrap';

function ItineraryCard({itineraryName}) {
  
return (
  <div>
    <Col sm="8">
      <Card id = {itineraryName._id}>
        <CardHeading 
        itineraryName = {itineraryName.itineraryName}
        />

        <CrdBody 
        country = {itineraryName.country} 
        state = {itineraryName.state} 
        city = {itineraryName.city} />
      </Card>
    </Col>
  </div>
  )
}

export default ItineraryCard;