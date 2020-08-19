import React from "react";
import CrdTitle from "../CardTitle";
import CrdText from "../CardText";
import ViewMoreBtn from "../CardBtn";
import {
  CardBody
} from 'reactstrap';
// import API from "../../utils/API";
import "./style.css";

function CrdBody({country, state, city, id}) {

  return(
    <CardBody className="itineraryBody">
      <CrdTitle country={country} />
      <CrdText state={state} city={city}/>
      <ViewMoreBtn id={id}/>
    </CardBody>
  )
}

export default CrdBody;