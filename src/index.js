import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Footer from './components/footer';
import reducers from './reducers';
import NavigationBar from './containers/navigation/';
import PropertyNew from './containers/new_property/';
import PropertiesBrowse from './containers/browse_properties/';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container fill">
        <NavigationBar />
        <Route exact path="/properties/browse" component={PropertiesBrowse} />
        <Route exact path="/properties/new" component={PropertyNew} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));