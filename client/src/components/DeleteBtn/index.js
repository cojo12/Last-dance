import React from "react";
import "./style.css";
import { Button } from "reactstrap"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Button {...props} role="button" tabIndex="0">
    </Button>
  );
}

export default DeleteBtn;
