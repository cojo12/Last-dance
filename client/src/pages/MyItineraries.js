import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import FormCard from "../components/NewItinerary/FormCard";

function Itinerary() {


    return (
      
      <Container fluid>
        <Row>
          <Col size="md-6">
            <FormCard />
          </Col>
        </Row>
      </Container>
    );
  }


export default Itinerary;