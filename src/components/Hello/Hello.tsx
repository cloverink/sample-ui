import React from 'react';

import "./Hello.scss"

export interface HelloProps {
  name: string
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <div className="text-3xl font-bold underline hello">
      Hello, {name}
  </div>
);

export default Hello;
