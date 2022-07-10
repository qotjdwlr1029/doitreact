import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * getDeriverStateFromProp 함수는 두가지 경우에 호출이 된다.
 * 1. 컴포넌트의 생성주기에서 constructor 이후
 * 2. 컴포넌트의 갱신주기에서 setState 이후
 *
 * NewCounter 컴포넌트와는 다르게 Counter컴포넌트는
 * constructor에서 처음 state가 초기화 된 후에 다시 초기화되지 않는다.
 *
 * 컴포넌트 갱신후에 호출되는 getDerivedStateFromProps
 * 코드가 없기 때문에 App.jsx에서 갱신된 값이 적용이 되지 않는다.
 */
class Counter2 extends Component {
  render() {
    return (
      <div>
        현재 카운트 : {this.props.count}
        <button
            onClick={() => this.props.onAdd()}
        >
            카운트 증가
        </button>
      </div>
    );
  }
}

Counter2.propTypes = {
    count : PropTypes.number,
    onAdd : PropTypes.func,
}

export default Counter2;
