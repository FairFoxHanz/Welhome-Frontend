import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import NavigationBar from './containers/navigation/';
import PropertyNew from './containers/new_property/';
import PropertiesBrowse from './containers/browse_properties/';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/properties/browse" component={PropertiesBrowse} />
          <Route path="/properties/new" component={PropertyNew} />
        </Switch>
        <footer className="sticky-bottom card text-center">
         <h6 className="font-weight-light"> made by: Daniel Wręczycki and Kewin Bobel </h6>
        </footer>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));