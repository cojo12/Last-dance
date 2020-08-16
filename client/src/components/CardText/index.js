import React from "react";

import {
  CardText
} from 'reactstrap';

function CrdText ({city, state}){
  return (
    <CardText>
      <strong>{city}, {state}</strong>
    </CardText>
  )
}

export default CrdText;