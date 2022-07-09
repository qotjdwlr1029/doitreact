import React, { Component } from 'react';
import TodaysPlan from './TodaysPlan';

class TodaysPlansApp extends Component {
    render() {
        const { onButtonClick, hasPlan } = this.props;
        return (
            <div className='body'>
                {hasPlan ? <TodaysPlan /> : null}
                <button onClick={onButtonClick}>
                    계획없음
                </button>
            </div>
        );
    }
}

export default TodaysPlansApp;