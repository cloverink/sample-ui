import '../test.css';

const HelloButton = () => {
  const handleOnClick = () => {
    console.log('handle a button component');
  };

  return (
    <button onClick={handleOnClick}>Button Component</button>
  );
};

export default HelloButton;
