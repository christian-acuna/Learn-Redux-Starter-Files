/*jshint esversion: 6 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(actionCreators, disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
