import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import ItineraryCard from "../components/card/index";

function Itinerary() {


    return (
      
      <Container fluid>
        <Row>
          <Col size="md-6">
            <ItineraryCard />
          </Col>
        </Row>
      </Container>
    );
  }


export default Itinerary;