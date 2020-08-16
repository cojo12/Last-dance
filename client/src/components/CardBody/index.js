import React from "react";
import CrdTitle from "../CardTitle";
import CrdText from "../CardText";
import ViewMoreBtn from "../CardBtn";
import {
  CardBody
} from 'reactstrap';
// import API from "../../utils/API";

function CrdBody({country, state, city}) {

  return(
    <CardBody>
      <CrdTitle country={country} />
      <CrdText state={state} city={city}/>
      <ViewMoreBtn />
    </CardBody>
  )
}

export default CrdBody;