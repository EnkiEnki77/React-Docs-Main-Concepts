// A package that provides DOM specific methods that can be used at the top level of your app. 
import {createRoot} from "react-dom";
import {createElement} from "react";
import App from './App'
// Creates a React root for the supplied div container, and then returns the root to be assigned to variable. The root is used 
// to render elements into the DOM using render(). Its called the root DOM node, because everything inside it is managed by reactDOM.
// Apps built with just React will typically have one root, but if integrating into an old project there may be many.

const root = createRoot(document.getElementById('root'))

const name = 'Enki'
// This is JSX, it stands for JS XML. It is neither a string, nor HTML. It is a syntax extension to JS, and is used to describe
// what the ui should look like in React. It produces React elements. React doesnt require JSX, but its a helpful visual aid, and  
// supplies more error messages. 
// You can embed any valid JS expression into JSX using curly braces.
// Elements may be confused with components, but elements are individual objects that define the DOM tree, where as components are
// made up of elements, and are utilized to group them together for reusability. 
// to make JSX more readable write it over multiple lines, to avoid automatic semicolon insertion wrap it in parentheses.
const element = (
    <h1>
        Hello {name}
    </h1> 
    )  

const nameFunc = user => `${user.firstName} ${user.lastName}`
const user = {
    firstName: 'Enki',
    lastName: 'Winters'
}
const userElement = <h1>Hello, {nameFunc(user)}</h1>

//After compilation JSX expressions become React.createElement calls, which evaluate to objects describing an DOM element. ReactDOM
// usees these objects to tell the DOM what to render. Since JSX is also an expression you can use it any way you would use regular 
// JS expressions. The objects returned by createElement are called React elements. 
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {nameFunc(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }


//You do not have to use JSX with React, to showcase that this is the React.createElement equivalent of the userElement JSX above.
// createElement takes 3 arguments, a string representing the tag youd like the elemnet to represent, an object containing all the
// props that will be passed to the element, and then the children the element will wrap around, it can be JSX, additional createElement
// calls, or a string for text that should be rendered. createElement also performs a few checks to help you write bug free code.
  const createdElement = createElement(
    'h1',
    null,
    `Yo, ${nameFunc(user)}!`
  )


// React elements are immutable, theyre like a single frame in a movie. With knowledge up to this point, the only way to update the
// UI is to pass a new element to root.render. Here's an example of the UI being continuously updated in this way.

function tick(){
    // React element that embeds a Date object call, showing locale time
    // Whenever you save in your editor the code is recompiled. ReactDOM compares previous React elements and their children to
    // the new ones, and only rerenders elements that have changes. Even though we're passing a new element describing the UI tree
    // on every setInteerval call if an element has no changes it isnt updated, because it has already been rendered. This is why
    // React has such good performance.
    const dateElement = (
        <div>
            <h1>Hello world</h1>
            <h1>It is {new Date().toLocaleTimeString()}</h1>
        </div>
    )
    // renders the element to the DOM
    return root.render(dateElement)
}
// Takes in the tick function as a callback, and sets up the browser feature timer to asynchronously call the tick function every
// second. Because it is asynchronous, it's really added to the callback queue every second, and then only invoked after the event
// loop indicates the global execution context has popped off the call stack. 
// setInterval(tick, 1000)

// Takes in an element utilizing it to keep the DOM updated. Can only render one element, and only one call works at a time. 
// So you should have a primary App component that is the parent of all other elements within the application. 
root.render(element)
root.render(getGreeting(user))
root.render(createdElement)
root.render(<App/>)