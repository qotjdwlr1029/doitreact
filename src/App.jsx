import React from 'react';
//import TodaysPlan from './03/TodaysPlan';
//import PropsComponent from './03/PropsComponent';
//import ChildComponent from './03/ChildComponent';
//import BooleanComponent from './03/BooleanComponent';
//import ChildComponent2 from './03/ChildComponent2';
//import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';

/*class App extends React.Component{
    render(){
        return(
            <PropsComponent 
                name="두잇 리액트"
            />
        )
    }
}
export default App;*/

/*class App extends React.Component {
    render() {
        const array = [1,2,3,4];
        const obj = {name : '제목', age : '30'};
        const node = <h1>노드</h1>
        const func = () => { console.log("메세지") }
        return (
            <div>
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={array}
                    objValue={obj}
                    nodeValue={node}
                    funcValue={func}
                />
            </div>
        );
    }
}*/
/*class App extends React.Component {
    render() {
        return (
            <div>
                <div><b>지루할 때 :</b><BooleanComponent bored /></div>
                <div><b>즐거울 때 :</b><BooleanComponent/></div>
            </div>
        );
    }
}*/

/*class App extends React.Component {
    render() {
        return (
            <div>
                <ChildComponent2
                    objValue = {{age: 20}}
                    requiredStringValue = "문자"
                />
            </div>
        );
    }
}*/

/*class App extends React.Component {
    render() {
        return (
            <div>
                <DefaultPropsComponent />
            </div>
        );
    }
}*/

class App extends React.Component {
    render() {
        return (
            <div>
                <ChildProperty>
                    <div><span>자식 노드</span></div>
                </ChildProperty>
            </div>
        );
    }
}

export default App;