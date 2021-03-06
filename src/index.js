import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistore } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistore}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,

  document.getElementById('root')
);
