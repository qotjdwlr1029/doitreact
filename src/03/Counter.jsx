import React, { Component } from 'react';

/**
 * getDeriverStateFromProp 함수는 두가지 경우에 호출이 된다.
 * 1. 컴포넌트의 생성주기에서 constructor 이후
 * 2. 컴포넌트의 갱신주기에서 setState 이후
 *
 * NewCounter 컴포넌트와는 다르게 Counter컴포넌트는
 * constructor에서 처음 state가 초기화 된 후에 다시 초기화되지 않는다.
 *
 * 컴포넌트 갱신후에 호출되는 getDeriverStateFromProp에
 * 코드가 없기 때문에 App.jsx에서 갱신된 값이 적용이 되지 않는다.
 */
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <br />
        <button onClick={this.increaseCounter}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
