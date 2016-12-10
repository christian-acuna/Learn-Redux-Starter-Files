/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
      return(
        <div>
          <Link to="/">Reduxstagram</Link>
        </div>
      );
  }
});

export default Main;
