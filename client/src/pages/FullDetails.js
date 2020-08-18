import React, {useEffect} from "react";
// import FullDetails from "../components/FullDetails/index";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { Set_Current_Itinerary, Add_Favorite, Remove_Favorite} from "../utils/actions";
import { Link } from "react-router-dom";

function ViewDetails({itineraryName}) {

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getItinerary(itineraryName.match.params.id)
    .then(res => dispatch ({ type: Set_Current_Itinerary, itinerary: res.data}))
    .catch(err => console.log(err));
  } );

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
          </Col>
          {state.favorites.indexOf(state.currentItinerary) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
              Lame
            </button>
          ) : (
            <button className="btn" onClick={addFavorite}>
              Love it!
            </button>
          )}
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


export default ViewDetails;