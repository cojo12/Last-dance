import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { Set_Current_Itinerary, Add_Favorite, Remove_Favorite} from "../utils/actions";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import "./details.css";

function FullDetails() {
  const params = useParams();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    console.log(params)
    if (params.id) {API.getItinerary(params.id)
    .then(res => {
      console.log(res.data);
      dispatch ({ type: Set_Current_Itinerary, post: res.data})
    })
    .catch(err => console.log(err));
  }
  }, [params] );
  // const addFavorite = () => {
  //   dispatch({
  //     type: Add_Favorite,
  //     post: state.currentItinerary
  //   });
  // };

  // const removeFavorite = () => {
  //   dispatch({
  //     type: Remove_Favorite,
  //     _id: state.currentItinerary._id
  //   });
  // };
  console.log(state)
  return (
    <>{state.currentItinerary ? (
      <Container fluid>
        <div className="deetsCon">
        <Row>
          <Col>
          <h1>
            {state.currentItinerary.itineraryName}
          </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{state.currentItinerary.country}, {state.currentItinerary.state}, {state.currentItinerary.city}</h3>
            <Card className="eventCrd">
                <CardBody>
                  <CardTitle>{state.currentItinerary.entertainment }</CardTitle>
                      <CardSubtitle className="eventSub">{state.currentItinerary.description }</CardSubtitle>
                        <CardText className="eventTxt">
                          
                            <p>Cost: {state.currentItinerary.cost }
                            <br />
                            Suggestions: {state.currentItinerary.suggestions }</p>
                          
                        </CardText>
                    </CardBody>
                </Card>
          </Col>
          {/* {state.favorites.indexOf(state.currentItinerary) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
              Lame
            </button>
          ) : (
            <button className="btn" onClick={addFavorite}>
              Love it!
            </button>
          )
        } */}
        </Row>
        <Row>
          <Col>
            <Link to="/Discover">
              Discover More
            </Link>
          </Col>
        </Row>
        </div>
      </Container>
    ) : (
      <div>loading...</div>
    )} </>
  );
}


export default FullDetails;