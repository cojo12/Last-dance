import React from 'react';
import ItineraryForm from "../FormGroup/index";
import FormHeading from "../FormHeader/index";
import { Card, Col, CardBody } from 'reactstrap';
import "./style.css";

const FormCard = (props) => {
  return (
      <Card className="newForm">
        <FormHeading />
        <CardBody>
          <ItineraryForm />
        </CardBody>
      </Card>
  );
}

export default FormCard;