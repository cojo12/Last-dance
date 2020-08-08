import React from "react";
import CardTitleText from '../CardTitleText/index';
import {
  CardTitle
} from 'reactstrap';

function CrdTitle({country, state, city}) {
  return(
    <CardTitle>
      <CardTitleText city={city} state={state} country={country}/>
    </CardTitle>
  );
}

export default CrdTitle;