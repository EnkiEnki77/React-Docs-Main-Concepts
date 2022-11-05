import React from 'react'

// State is similar to props, but it is private and fully controlled by the component it is defined within. You can create state 
// for both class and function components.
// There are three things to know about state. 
// 1. do not directly modify the state, you must utilize setState. Otherwise React wont know an update happened.
// 2. State updates may be asynchronous. React may batch multiple setState calls into one update for performance. 



class ClockClass extends React.Component {
    // Props come in through the constructor, and state is initialized here. 
    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }

    // In apps with many components its important to clear up any resources being used when a component is removed from the DOM. AKA
    // unmounted.
    // Whenever a component is rendered for the first time it is called mounting.
    // There are special methods you can declare that run code at various points in a components life, such as mounting and unmounting, 
    // these are called lifecycle methods.

    // runs after the component output has been rendered to the DOM, good for setting things  up such as timers.
    componentDidMount(){
        // you can define variables for your classes using the this keyword.
        // When you call setInterval it returns an ID, which you need to pass to clearInterval in order to clear the timer.
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    // method that sets new state using setState.
    tick(){
        this.setState({
            date: new Date()
        })
    }

    //The render method is called each time a component updates, but as long as the component is rendered into the same DOM node,
    // Only a single instance is used. This lets a component use additional features such as state and lifecycle methods.
    render() {
        return (
            // To utilize state or props in class components you must use the this keyword. 
            <div>
              <h1>Hello, world! Im a class</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
    }
}

//When clock is passed to root.render() React calls the constructor of the component. this.state is initialized with a state called
// date that is assigned an initial value of new Date() 
// After the components constructor is called React calls the render method, this tells React how it should tell the DOM to look.
// Once the DOM has rendered the UI, componentDidMount is called. it calls setInterval, which asks the browser to set up a timer.
// This timer makes a call to the tick method every second.
// The tick method sets the state to a new Date object, and because setState was called React knows an update has occured and calls 
// the render method again. 
// If the output of the render method is different than it was the last time it was called React updates the DOM accordingly. 
// If the component is ever removed from the DOM componentWillUnmount is called utilizing clearInterval to stop the browser timer.


const Clock = (props) => {
    return (
        <div>
          <h1>Hello, world! Im a function</h1>
          <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
      );
}

export  {Clock, ClockClass}