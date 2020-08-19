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
  const addFavorite = () => {
    dispatch({
      type: Add_Favorite,
      post: state.currentItinerary
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: Remove_Favorite,
      _id: state.currentItinerary._id
    });
  };
  console.log(state)
  return (
    <>{state.currentItinerary ? (
      <Container fluid>
        <Row>
          <Col>
          <h1>
            {state.currentItinerary.itineraryName}
          </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{state.currentItinerary.country}, {state.currentItinerary.state}, {state.currentItinerary.city}</h2>
            <Card>
                <CardBody>
                  <CardTitle>{state.currentItinerary.entertainment }</CardTitle>
                      <CardSubtitle>{state.currentItinerary.description }</CardSubtitle>
                        <CardText>
                          <ul>
                            <li>Cost: {state.currentItinerary.cost }</li>
                            <li>{state.currentItinerary.suggestions }</li>
                          </ul>
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
      </Container>
    ) : (
      <div>loading...</div>
    )} </>
  );
}


export default FullDetails;