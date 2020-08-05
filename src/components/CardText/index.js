import React from "react";

import {
  CardText
} from 'reactstrap';

function CrdText ({entertainment, description}){
  return (
    <CardText>
      <strong>entertainment placeholder{entertainment}</strong>
      <br/>
      description placeholder {description}
    </CardText>
  )
}

export default CrdText;