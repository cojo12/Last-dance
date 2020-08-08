import React from "react";
import CardHeaderTitle from "../cardHeaderTitle";
import {
  CardHeader
} from 'reactstrap';
import API from "../../utils/API";

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