import React from "react";
import CardTitleText from '../CardTitleText/index';
import {
  CardTitle
} from 'reactstrap';

function CrdTitle({entertainment}) {
  return(
    <CardTitle>
      <CardTitleText entertainment={entertainment}/>
    </CardTitle>
  );
}

export default CrdTitle;