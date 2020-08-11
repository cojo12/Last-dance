import React from "react";
import CardHeaderTitle from "../cardHeaderTitle";
import {
  CardHeader
} from 'reactstrap';

function CardHeading({itineraryName}) {
  return(
    <div>
    <CardHeader>
      <CardHeaderTitle
      itineraryName = {itineraryName} 
      />
    </CardHeader>
    </div>
  )
}

export default CardHeading;