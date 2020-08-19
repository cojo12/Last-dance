import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import ItineraryCard from "../components/card/index";
import API from "../utils/API";
import "./pagestyle.css";

function Itinerary() {
  const [itineraryName, setItineraryName] = useState ([])
  const [country, setCountry] = useState ([]);
  const [state, setState] = useState ([]);
  const [city, setCity] = useState ([]);


  useEffect(( ) => {
    API.getItineraries().then((res) => {
     setItineraryName(res.data)
     setCountry(res.data);
     setState(res.data);
     setCity(res.data);
      
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
              console.log(itinerary)
              return (
            <ItineraryCard 
            itineraryName = {itinerary} id= {itinerary._id}/>
              )
            })}
          </Col>
        </Row>
      </Container>
    );
  }


export default Itinerary;
