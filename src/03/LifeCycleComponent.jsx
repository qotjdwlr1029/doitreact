import React from 'react';

class LifeCycleComponent extends React.Component {

    //props, state값에 접근하려면 인자로 전달된 값으로 이용해야한다.
    //props는 상위 컴포넌트, state는 현재 컴포넌트의 값이다.
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps 호출');
        return {};
    }

    constructor(props){
        super(props);
        //getDerivedStateFromProps() 함수를 사용하므로
        // 경고 메세지를 건너 뛰기 위해 state 초깃값을 설정합니다.
        this.state = {};
        console.log('constructor 호출');
    }

    // render() 함수가 jsx를 ㅎ화면에 그린 이후에 호출되는 함수입니다.
    componentDidMount(){
        console.log('componentDidMount 호출');
        this.setState({ update : true });
    }

    // 컴포넌트가 실제화면에 출력된 이후 호출되는 함수
    componentDidUpdate(){
        console.log('componentDidUpdate 호출');
    }

    //컴포넌트가 소멸되기 직전에 호출되는 함수다.
    componentWillUnmount(){
        console.log('componentWillUnmount 호출');
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate 호출');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate 호출');
        return true;
    }

    render() {
        console.log('render 호출');
        return null;
    }
}

export default LifeCycleComponent;