import React, { Component } from 'react'
import './App.css'
import Comment from './components/Comment'
import { Clock, ClockClass } from './components/Clock'
import ElementComponent from './components/Element'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Count from './components/Counter'

// Components allow you to split the UI up into independent, reusable pieces in which you can think about in isolation based on their
// functionality/purpose within the application. They can be seen as functions that take in arbitrary inputs called props, and return
// React elements that describe the UI. They can also be used to define the UI logic for those elements. There are two kinds of components.

// This is a React functional component.
// This function is a valid component, because it takes an optional props object input, and returns a single React element. Components
// can only return one element, so any additional elements youd like that component to encapsulate should be children.  
const App = (props) => {
    const author = {
        avatarUrl: '',
        name: 'John'
    }

    const [counterSwitch, setCounterSwitch] = React.useState(true)
  return (
    <div className="App">
        {/* Because Components are functions that return elements they can be imported to other files, and utilized as JSx the same way
        an element can be, because on compilation they are just the returned element, containing any of the state/props logic embedded
        into them. */}
        {/* When React sees an element representing a component it passes JSX attributes and children to this component as an object 
        This object is called props*/}
        {/* Components can be utilized as just a single tag, or with open and closing tags. For the latter, any elements passed here
        will be assigned to props.children */}
        {/* Elements that represent a component must be capitalized, otherwise they are treated as DOM tags. They component they
        represent must also be imported/in scope. */}
        <ElementComponent name='Sara'>
            <h2>I am a child of the ElementComponent</h2>
        </ElementComponent>

        {/* Components can refer to other components in their output. This lets us reuse the same components in many places for any
        level of detail. For a button, a form, a screen, etc. Each reference to a component will be treated as a seperate element,
        meaning you can pass different props to each reference. */}
        <Welcome name='Bob'/>
        <Welcome name='Snowy'/>
        <Welcome name='Enki'/>

        <Comment author={author} text='hi bitches' date={new Date().toLocaleDateString()}/>

        <Clock date={new Date()}/>
        <ClockClass/>

        {/* Components are truly isolated, so even though im putting two Counters here which are both referencing the same component
        They are different instances of that componnet, and so have their own state and lifecycle */}
        {/* I can conditionally render components based on the current state of the component rendering them. */}
        {/* This is an if else conditional render utilizing ternary operator, allows you to decide bewtween two elements depending on 
        state. You can chain these into multiple if else statements, but remember if conditions become too complex you should just extract
        a component.*/}
        {counterSwitch ? <Counter increment={1}/> :  <Counter increment={2}/>}
         <Counter increment={3}/>
        {/* This is an && conditionl render, used to conditional render one element based on if a condition evaluates to true.
        This works because true && expression always evaluates to expression, and false && expression evaluates to false.
        Be careful with this because using a falsey expression on the left said the falsey expression will be rendered into the JSX*/}
        {counterSwitch &&  <Counter increment={2}/>}
        
        x
    </div>
  )
}


// This is a React class component.
// class based components are similar to function components in that they take in a props object input, return a React element.
// props are recieved through the class constructor, and elements are returned from a render() method.
class ClassApp extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="App">
                class App 
            </div>
        )
    }
}

// This is how you export things such as components as modules to be imported in other files. export default can only take one thing
// it makes it the primary module of the file. export can take as many things as youd like, but they must be destructured from the
// file on import. 
export default App


// The render cycle is as follows:
// 1. root.render() is called with <App/> as it's input.
// 2. <App/> is called with null as its props.
// 3. <App/> returns <div> element, that element is converted to a React.createElement() call with the following input.
// React.createElement(
    // 'div',
    // {className: 'App'},
    // <Children/>
// )
// 4. any children that represent jsx dom tags are converted to createElement calls themselves, any children that are references to
// components go through the same process as App, and return elements that convert to createElement calls.
// 5. ReactDOM takes the tree of React element objects and uses them to tell the DOM what to look like.
// 6. Whenever a save is made in your editor the source code is recompiled, and a new tree is created. React recursively goes through
// the old tree. Any elemnts that have changes to props/children are updated, and the element along with its children are rerendered.
// Any elemnents that have not changed are not rerenderd, because they already have been. 