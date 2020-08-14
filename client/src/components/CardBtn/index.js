import React from "react";
import {
  Button, Form
} from 'reactstrap';
import { Link } from 'react-router-dom';

function ViewMoreBtn(){
  return (
      <Link to="/FullDetails">
  <Button color="success" size="md">
  See Full Details
  </Button>
  </Link>
  )
}

export default ViewMoreBtn; 