import React from 'react';
import TodoList from './03/TodoList';
// import ListExample from './03/ListExample';
//import TodaysPlan from './03/TodaysPlan';
//import PropsComponent from './03/PropsComponent';
//import ChildComponent from './03/ChildComponent';
//import BooleanComponent from './03/BooleanComponent';
//import ChildComponent2 from './03/ChildComponent2';
//import DefaultPropsComponent from './03/DefaultPropsComponent';
//import ChildProperty from './03/ChildProperty';
//import StateExample from './03/StateExample';
//import ForceUpdateExample from './03/ForceUpdateExample';
// import Counter from './03/Counter';
// import NewCounter from './03/NewCounter';
//import LifeCycleComponent from './03/LifeCycleComponent';
// import SFC from './03/SFC';

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

/*class App extends React.Component {
    render() {
        return (
            <div>
                <ChildProperty>
                    <div><span>자식 노드</span></div>
                </ChildProperty>
            </div>
        );
    }
}*/

/*class App extends React.Component {
    render() {
        return (
            <div>
                <LifeCycleComponent/>
            </div>
        );
    }
}*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 12 };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }

  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}


class MyComponent extends React.Component{
    componentDidUpdate(){ console.log('MyComponent 새로고침'); }
    render(){
        return(
            <div>a</div>
        )
    }
}
class MyPureComponent extends React.PureComponent{
    componentDidUpdate(){ console.log('MyPureComponent 새로고침'); }
    
    render(){
        const {value} = this.props
        return  <div>a</div>
        
    }
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.listValue = [{ name : 'Park' },{ name : 'Lee' }];
        this.state = { version : 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        console.log('push button');
        setTimeout(() => {
            this.listValue[0].name = 'justin';
            this.setState({ version : 1 });
        }, 100);
        setTimeout(() => {
            this.listValue = [{name : 'justin'},{name : 'Lee'}];
            this.setState({version : 2});
        },200);
    }
    render() {
        return (
            <div className='body'>
                <MyComponent value={this.listValue}/>
                <MyPureComponent value={this.listValue}/>
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}*/

/*class App extends React.Component {
    render() {
        return (
            <div>
                <ListExample/>
            </div>
        );
    }
}*/

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoList/>
            </div>
        );
    }
}

export default App;
