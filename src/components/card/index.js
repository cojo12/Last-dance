import React from "react";
// import Heading from "../cardHeading";
import {
  Card, CardText, CardBody,
  CardTitle,
  Button, Col, Row
} from 'reactstrap';

function ItineraryCard({itineraryName}) {
return (
  <div>
      <Row>
        <Col sm="6">
        <Card>
              {/* <div className="card-header">
                {/* <Heading itineraryName = {itineraryName} /> */}
              {/* </div> */} 
            <CardBody>
            <CardTitle>
                Location
            </CardTitle>
            <CardText width="60%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis itaque eius eos. Architecto, deserunt voluptas dolorum, illum ipsam magni aut cumque similique aliquam, rem officia rerum ipsum impedit accusamus.
            </CardText>
            <Button color="success" size="md">
              See Full Details
            </Button>{' '}
                {/* <a href="#" className="btn btn-primary">See full details</a> */}
            </CardBody>
        </Card>
          </Col>
        </Row>
      </div>
)
}

export default ItineraryCard;