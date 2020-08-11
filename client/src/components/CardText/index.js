import React from "react";

import {
  CardText
} from 'reactstrap';

function CrdText ({description}){
  return (
    <CardText>
      <strong>Description Placeholder{description}</strong>
    </CardText>
  )
}

export default CrdText;