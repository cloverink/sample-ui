import React from 'react';
import scssClasses from './styles.module.scss';
export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <div className={scssClasses.hello}>
    <p className='text-3xl font-bold underline'>
      Hello, {name}
    </p>
  </div>
);

export default Hello;
