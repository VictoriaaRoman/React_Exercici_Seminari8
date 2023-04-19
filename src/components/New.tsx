import React from 'react';
import { Sub } from "../types"

interface Props {
  sub: Sub;
}

const exercici: React.FunctionComponent<Props> = ({ sub })=> {
  return (
    <div>
      <img src={sub.avatar} alt={sub.nick} />
      <button>HELLO</button>
    </div>
  );
};

export default exercici;
