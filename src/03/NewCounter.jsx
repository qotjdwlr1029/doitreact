import React, { Component } from 'react';

/**
 * NewCounter컴포넌트는 Counter컴포넌트와는 다르게
 * App.jsx에서 변경된 state.count값이 NewCounter의 프로퍼티로 입력하게 되면
 *
 * 해당 컴포넌트는 갱신주기로 들어가는데
 * getDerivedStateFromProps가 실행이 되면서 함수 내부의 코드가 실행이 된다.
 *
 * App.jsx에서 프로퍼티로 받은 count (이전보다 10증가된 값)가 들어오게 되면
 * getDerivedStateFromProps안에 props로 받아지게 되어 const count = 10이 되고,
 *
 * 최초 생성주기에서 실행된 getDerivedStateFromProps에 의해서 newCount는 count값이 할당되어 10인 상황에서
 * 갱신주기에서 다시 들어온 props.count = 20 에 의해서 state.newCount 는 20으로 변경이 된다.
 */
class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    console.log(state.count);
    console.log(count);
    console.log(count === state.count);

    return {
      //프로퍼티에서 보관한 count값을 보관한다.
      count,
      newCount:
        count === state.count
          ? //프로퍼티가 변경되지 않았다면 기존 state값으로 설정한다.
            state.newCount
          : //프로퍼티가 변경되었다면 변경된 프로퍼티값으로 설정한다.
            count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    console.log(this.state);

    return (
      <div>
        현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
