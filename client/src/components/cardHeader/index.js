import React from "react";
import {
  CardHeader
} from 'reactstrap';

function CardHeading({itineraryName}) {
  return(
    <CardHeader itineraryName = {itineraryName}>
      itinerary name placeholder
    </CardHeader>
  )
}

export default CardHeading;