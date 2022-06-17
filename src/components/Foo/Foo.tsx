import React from 'react';

export interface FooProbs {
  name?: string;
}

const Foo: React.FC<FooProbs> = ({ name }) => {
  const handleOnClick = () => {
    console.log('bar' + new Date().toISOString());
  };

  const btnName = name ? name : 'Foo'

  return (
    <div className="App">
      <button onClick={handleOnClick}>{btnName} Button</button>
    </div>
  );
};

export default Foo;
