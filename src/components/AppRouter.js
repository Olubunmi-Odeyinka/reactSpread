/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import Header from './common/page/Header';
import Footer from './common/page/Footer';
import SpreadPage from "./modules/spread/SpreadPage";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.loading

class AppRouter extends React.Component {

  render() {
    const heightStyle = { height: '85vh'};
    return (
      <div>
        <Header />
        <div style={heightStyle}>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/spread" component={SpreadPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

AppRouter.propTypes = {
  children: PropTypes.element
};



export default AppRouter;
