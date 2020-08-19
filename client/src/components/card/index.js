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
      <Card id = {itineraryName._id}>
        <CardHeading 
        itineraryName = {itineraryName.itineraryName}
        />

        <CrdBody 
        country = {itineraryName.country} 
        state = {itineraryName.state} 
        city = {itineraryName.city}
        id = {itineraryName._id} />
      </Card>
  </div>
  )
}

export default ItineraryCard;