import React, {useState, Component}from "react";
import API from "../../utils/API";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { render } from "@testing-library/react";

class EventCard extends Component {

  constructor() {
    super();
    this.state={
      events: { }
    }
  }

  componentDidMount () {
    fetch(`http://localhost:3001/api/event/5f3494b682f35b25a0e830a2`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({events: data});
    })
  }
  
  

render(){
  return (
    <div>
      <Card>
      <CardBody>
        <CardTitle>{this.state.events._id }</CardTitle>
        <CardTitle>{this.state.events.entertainment }</CardTitle>
        <CardTitle>{this.state.events.suggestions }</CardTitle>
        <CardTitle>{this.state.events.cost }</CardTitle>
        <CardTitle>{this.state.events.description }</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            {/* <CardText>{ Object.keys(events).map(event => {

              return(
                <p>{event.entertainment}</p>
              )
            }) }</CardText> */}
            <Button>Button</Button>
          </CardBody>
      </Card>
  
    </div>
  
  )
}


}

export default EventCard;