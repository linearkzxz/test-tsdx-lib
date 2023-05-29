import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TestA } from '../dist';
// import { TestA } from '../.';
// const TestA = React.lazy(() => import('../dist/mylib.esm'));

const App = () => {
  return (
    <div>
      <TestA />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
