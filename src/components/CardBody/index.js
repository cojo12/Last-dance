import React from "react";
import CrdTitle from "../CardTitle";
import CrdText from "../CardText";
import ViewMoreBtn from "../CardBtn/index";
import {
  CardBody
} from 'reactstrap';

function CrdBody() {
  return(
    <CardBody>
      <CrdTitle />
      <CrdText />
      <ViewMoreBtn />
    </CardBody>
  )
}

export default CrdBody;