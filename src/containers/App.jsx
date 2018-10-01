import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted')
  }

  render () {
    return <h1>Hello from React Boilerplate</h1>;
  }
}