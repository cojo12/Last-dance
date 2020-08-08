import React from 'react';
import SaveItineraryBtn from "../FormButton/index";
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function ItineraryForm() {
  return (
    <Form>
    <FormGroup>
      <Label for="itineraryName">Itinerary Name</Label>
      <Input type="text" name="itineraryName" id="itineraryName" placeholder="Awesomesauce" />
    </FormGroup>
    <FormGroup>
        <Label for="country">Country</Label>
        <Input type="text" name="country" id="country"/>
      </FormGroup>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city"/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" id="state"/>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label for="zip">Zip</Label>
          <Input type="text" name="zip" id="zip"/>
        </FormGroup>  
      </Col>
    </Row>
    <FormGroup>
      <Label for="entertainment">Entertainment</Label>
          <Input type="text" name="entertainment" id="entertainment"/>
        </FormGroup>
        <FormGroup>
          <Label for="suggestions">Suggestions</Label>
          <Input type="text" name="suggestions" id="suggestions"/>
        </FormGroup>
      <FormGroup>
      <Label for="cost">Cost</Label>
      <Input
        type="number"
        name="number"
        id="cost"
        placeholder="$15.00"
      />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="text" id="description" />
    </FormGroup>
    <SaveItineraryBtn />
  </Form>
  )
}

export default ItineraryForm;