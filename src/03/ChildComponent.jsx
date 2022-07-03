import React from 'react';
import propTypes from 'prop-types';

class ChildComponent extends React.Component {
    render() {
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <span>불리언 값 : { boolValue } </span> 
                <span>숫자 값 : { numValue } </span> 
                <span>배열 값 : { arrayValue } </span> 
                <span>객체 값 : { String(objValue) } </span> 
                <span>노드 값 : { nodeValue } </span> 
                <span>함수 값 : { String(funcValue) } </span> 
            </div>
        );
    }
}

ChildComponent.propTypes = {
    boolValue : propTypes.bool,
    numValue : propTypes.number,
    arrayValue : propTypes.arrayOf(propTypes.number),
    objValue : propTypes.object,
    nodeValue : propTypes.node,
    funcValue : propTypes.func,
}

export default ChildComponent;