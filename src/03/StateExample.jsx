import React from 'react';

class StateExample extends React.Component {

    constructor(props){
        super(props);
        //state정의
        this.state ={
            loading :true,
            formData : 'no data',
        }

        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData,4000);
    }

    handleData(){
        const data = 'new data';
        const { formData } = this.state;

        this.setState({
            loading : false,
            formData : data + formData,
        })
        //this.state.loading은 현재 true입니다.
        console.log('loading값', this.state.loading);
        //이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
    }

    render() {
        return (
            <div>
                {/* state 데이터는 this.state로 가능합니다. */}
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;