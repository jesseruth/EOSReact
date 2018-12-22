import React, { Component } from 'react';

interface Props {
  name: string
}

class Accounts extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Accounts;