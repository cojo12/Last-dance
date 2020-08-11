import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import ItineraryCard from "../components/card/index";
import API from "../utils/API";

function Itinerary() {
  const [itineraryName, setItineraryName] = useState ([])

  useEffect(( )=> {
    API.getItineraries().then((res) => {
     setItineraryName(res.data)
      
      console.log(res.data)
      return
    }
    ) 
  }, []
  );

    return (
      
      <Container fluid>
        <Row>
          <Col size="md-6">
            {itineraryName.map( itinerary => {
              return (
            <ItineraryCard 
            itineraryName = {itinerary} key= {itinerary._id}/>
              )
            })}
            
          </Col>
        </Row>
      </Container>
    );
  }


export default Itinerary;
