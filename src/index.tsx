import React from 'react';
import ReactDOM from 'react-dom/client';

import { Hello, Foo } from 'components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div className="App">
      <Hello name='Aran' />
      <Foo name="Bar"></Foo>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
