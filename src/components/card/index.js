import React from "react";
import CardHeading from "../cardHeader/index";
import {
  Card, CardText, CardBody,
  CardTitle,
  Button, Col
} from 'reactstrap';

function ItineraryCard() {
return (
  <div>
        <Col sm="8">
        <Card>
          <CardHeading />

            <CardBody>
            <CardTitle>
                Location
            </CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis itaque eius eos. Architecto, deserunt voluptas dolorum, illum ipsam magni aut cumque similique aliquam, rem officia rerum ipsum impedit accusamus.
            </CardText>
            <Button color="success" size="md">
              See Full Details
            </Button>{' '}
                {/* <a href="#" className="btn btn-primary">See full details</a> */}
            </CardBody>
        </Card>
          </Col>
      </div>
)
}

export default ItineraryCard;