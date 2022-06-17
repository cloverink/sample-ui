import { createRoot } from 'react-dom/client';

import {Hello, Foo} from 'components';

export { Hello, Foo }

const App = () => {
  return (
    <div className="App">
      <Hello></Hello>
      <Foo></Foo>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);