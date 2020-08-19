import React from "react";
import "./style.css";
import { Button, Container } from "reactstrap"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Container className="delProf">
      <div>
      <Button className="delBtn" {...props} role="button" tabIndex="0">
      </Button>
      </div>
    </Container>
    
  );
}

export default DeleteBtn;
