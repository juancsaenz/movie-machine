import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'movie_machine/src/redux/stores/app/actions';
import * as moviesActions from 'movie_machine/src/redux/stores/movies/actions';

import View from './view';

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = state => ({
  loading: state.getIn(['AppState', 'loading']),
});

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  moviesActions: bindActionCreators(moviesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
