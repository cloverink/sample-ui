import React from 'react';
import './index.css';

import { Hello, Navigation } from 'components'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Hello name="world"></Hello>
    </div>
  );
}

export default App;
