export interface FooProps {
  name: string;
}

const Foo: React.FC<FooProps> = ({ name }) => {
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
