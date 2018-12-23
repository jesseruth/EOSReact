import React, { Component } from 'react';

interface Props {
  name: string,
  onTodoClick: (id: string) => void,
  reduxQueryTest: () => void,
  todos: number,
}

class Accounts extends Component<Props> {
  handleClick = () => {
    const {
      onTodoClick,
      reduxQueryTest,
    } = this.props;
    onTodoClick("is");
    reduxQueryTest();
    console.log('test')
  };

  render() {
    console.log('Accounts', this.props);
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
}

export default Accounts;