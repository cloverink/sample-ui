import React from 'react';

export type FooType = {
  name?: string;
  bar: string;
}

const Foo: React.FC<FooType> = ({ name, bar }) => {
  const handleOnClick = () => {
    console.log('bar' + new Date().toISOString());
  };

  return (
    <div>
      <button onClick={handleOnClick}>{name} {bar} Button</button>
    </div>
  );
};

export default Foo;
