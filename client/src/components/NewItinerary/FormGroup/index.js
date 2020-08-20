import React, {useState} from 'react';
import SaveItineraryBtn from "../FormButton/index";
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Axios from 'axios';
import API from '../../../utils/API';
import { Link } from 'react-router-dom';
// import { post } from '../../../../../routes';
// import { create } from '../../../../../models/Event';
import "./style.css";
import {findDOMNode} from "react-dom";
import $ from "jquery";

function ItineraryForm() {
  const [itineraryName, setItineraryName] = useState ("");
  const [country, setCountry] = useState ("");
  const [city, setCity] = useState ("");
  const [state, setState] = useState ("");
  const [zip, setZip] = useState ("");
  const [entertainment, setEntertainment] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescription] = useState("");



    
  

  function submitItinerary(e) {
    e.preventDefault();
    e.target.reset();
    Axios.post("/api/itinerary", {
      itineraryName,
      country,
      city,
      state,
      zip,
      entertainment,
      suggestions,
      cost,
      description
    })
    // .then( result => {
    //   console.log(result)
    //   API.saveEvent({
    //     entertainment,
    //     suggestions,
    //     cost,
    //     description,
    //     itineraryId: result.data._id
    //   })
    // })
    .then(res => {
      console.log(res)
      document.getElementById("new-itinerary").reset();
    })
    .catch(err => console.log(err));
    setItineraryName("");
    setCountry("");
    setCity("");
    setState("");
    setZip("");
    setEntertainment ("");
    setSuggestions("");
    setCost("");
    setDescription("");
  }


  
  return (
    <Form className="newForm" id="new-itinerary" onSubmit = {submitItinerary}>
    <FormGroup>
      <Label for="itineraryName">Itinerary Name</Label>
      <Input type="text" name="itineraryName" id="itineraryName" placeholder="Awesomesauce" onChange = {(e) => {setItineraryName(e.target.value)}} value = {itineraryName}/>
    </FormGroup>
    <FormGroup>
        <Label for="country">Country</Label>
        <Input type="text" name="country" id="country" onChange = {(e) => {setCountry(e.target.value)}} value = {country}/>
      </FormGroup>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" onChange = {(e) => {setCity(e.target.value)}} value = {city}/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" id="state" onChange = {(e) => {setState(e.target.value)}} value = {state}/>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label for="zip">Zip</Label>
          <Input type="text" name="zip" id="zip" onChange = {(e) => {setZip(e.target.value)}} value = {zip}/>
        </FormGroup>  
      </Col>
    </Row>
    <FormGroup>
      <Label for="entertainment">Entertainment</Label>
          <Input type="text" name="entertainment" id="entertainment" onChange = {(e) => {setEntertainment(e.target.value)}} value = {entertainment}/>
        </FormGroup>
        <FormGroup>
          <Label for="suggestions">Suggestions</Label>
          <Input type="text" name="suggestions" id="suggestions" onChange = {(e) => {setSuggestions(e.target.value)}} value = {suggestions}/>
        </FormGroup>
      <FormGroup>
      <Label for="cost">Cost</Label>
      <Input
        type="number"
        name="number"
        id="cost"
        placeholder="15.00"
        onChange = {(e) => {setCost(e.target.value)}} value = {cost}
      />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="text" id="description" onChange = {(e) => {setDescription(e.target.value)}} value = {description}/>
    </FormGroup>
    <SaveItineraryBtn />
    <div>
    <p class="message">Page does not refresh, <Link to="/discover">return to discover</Link> or refresh to add more.</p>
      </div>
  </Form>
  )
}

export default ItineraryForm;