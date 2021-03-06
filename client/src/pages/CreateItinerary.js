import React from "react";
import { Col, Row, Container } from "../components/Grid";
import FormCard from "../components/NewItinerary/FormCard";
import { motion } from "framer-motion";

function MyItinerary() {


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


export default MyItinerary;