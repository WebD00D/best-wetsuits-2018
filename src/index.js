import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/brands/#oneill" exact component={App} />
      <Route path="/brands/#vissla" exact component={App} />
      <Route path="/brands/#feral" exact component={App} />
      <Route path="/brands/#billabong" exact component={App} />
      <Route path="/brands/#quiksilver" exact component={App} />
      <Route path="/brands/#xcel" exact component={App} />
      <Route path="/brands/#ripcurl" exact component={App} />
      <Route path="/brands/#hurley" exact component={App} />
      <Route path="/brands/#seven-till-eight" exact component={App} />
      <Route path="/brands/#volcom" exact component={App} />
      <Route path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
