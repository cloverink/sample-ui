import React from 'react';

import "./Hello.scss"

export type HelloType = {
  name: string
}

const Hello: React.FC<HelloType> = ({ name }) => (
  <div className="text-3xl font-bold underline hello">
    Hello, {name}
  </div>
);

export default Hello;
