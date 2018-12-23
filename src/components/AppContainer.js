import { connect } from 'react-redux'
import { toggleTodo } from '../actions';
import { helloRequest } from '../queries';
import Accounts from './Accounts'
import { getVisibleTodos } from '../selectors'
import { mutateAsync } from 'redux-query';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state),
    name: '',
    test1: 2,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    reduxQueryTest: () => dispatch(mutateAsync(helloRequest())),
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);

export default AppContainer