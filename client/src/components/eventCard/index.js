import React, { Component}from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';

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
              <CardText>
              </CardText>
            <Button>Button</Button>
          </CardBody>
      </Card>
  
    </div>
  
  )
}


}

export default EventCard;