import React from "react";
import CrdTitle from "../CardTitle";
import CrdText from "../CardText";
import ViewMoreBtn from "../CardBtn";
import {
  CardBody
} from 'reactstrap';
// import API from "../../utils/API";

function CrdBody({entertainment, description}) {

  return(
    <CardBody>
      <CrdTitle entertainment = {entertainment} />
      <CrdText description = {description} />
      <ViewMoreBtn />
    </CardBody>
  )
}

export default CrdBody;