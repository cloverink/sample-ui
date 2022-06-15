const HelloButton = () => {
  const handleOnClick = () => {
    console.log('handle a button component');
  };

  return (
    <div className="App">
      <button onClick={handleOnClick}>Button Component</button>
    </div>
  );
};

export default HelloButton;
