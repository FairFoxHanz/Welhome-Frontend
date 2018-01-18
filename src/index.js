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
import PropertyDetails from './containers/browse_properties/details';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container fill">
        <NavigationBar />
        <Switch>
          <Route exact path="/properties/details" component={PropertyDetails} />
          <Route exact path="/properties/new" component={PropertyNew} />
          <Route exact path="/properties/browse" component={PropertiesBrowse} />
          <Route path="/properties/prop" component={PropertyDetails} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));