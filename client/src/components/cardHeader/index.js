import React from "react";
import CardHeaderTitle from "../cardHeaderTitle";
import {
  CardHeader
} from 'reactstrap';
import './style.css'

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