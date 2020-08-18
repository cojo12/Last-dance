import React from "react";
import CardTitleText from '../CardTitleText/index';
import {
  CardTitle
} from 'reactstrap';

function CrdTitle({country}) {
  return(
    <CardTitle>
      <CardTitleText country={country}/>
    </CardTitle>
  );
}

export default CrdTitle;