import React from 'react';
import 'react-loading-bar/dist/index.css';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


export const Header = () => {
    return (

      <div>
        <nav className="navbar navbar-default navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName='' exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName='' to="/spread">Spread</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

const mapStateToProps =(state) => {
  return{
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
