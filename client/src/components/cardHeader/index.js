import React from "react";
import CardHeaderTitle from "../cardHeaderTitle";
import {
  CardHeader
} from 'reactstrap';
import "./style.css";

function CardHeading({itineraryName}) {
  return(
    <div>
    <CardHeader className="itineraryHdr">
      <CardHeaderTitle
      itineraryName = {itineraryName} 
      />
    </CardHeader>
    </div>
  )
}

export default CardHeading;