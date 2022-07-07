import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count : props.count,
        }
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    increaseCounter(){
        const {count} = this.state;

        this.setState({count : count + 1});
    }

    render() {
        return (
            <div>
                <span>카운트 : {this.state.count}</span><br/>
                <button onClick={this.increaseCounter}>카운트 증가</button>
            </div>
        );
    }
}

export default Counter;