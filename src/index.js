// A package that provides DOM specific methods that can be used at the top level of your app. 
import {createRoot} from "react-dom";
import {createElement} from "react";
// Creates a React root for the supplied div container, and then returns the root to be assigned to variable. The root is used 
// to render elements into the DOM using render(). The root container wraps all components in the DOM tree.
const root = createRoot(document.getElementById('root'))

const name = 'Enki'
// This is JSX, it stands for JS XML. It is neither a string, nor HTML. It is a syntax extension to JS, and is used to describe
// what the ui should look like in React. It produces React elements. React doesnt require JSX, but its a helpful visual aid, and  
// supplies more error messages. 
// You can embed any valid JS expression into JSX using curly braces.
const element = <h1>Hello {name}</h1>   

const nameFunc = user => `${user.firstName} ${user.lastName}`
const user = {
    firstName: 'Enki',
    lastName: 'Winters'
}
const userElement = <h1>Hello, {nameFunc(user)}</h1>

//After compilation JSX expressions become React.createElement calls, which evaluate to objects describing an element. ReactDOM
// usees these objects to tell the DOM what to render. Since JSX is also an expression you can use it any way you would use regular 
// JS expressions. 
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {nameFunc(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }


  //You do not have to use JSX with React, to showcase that this is the React.createElement equivalent of the userElement JSX above.
// createElement takes 3 arguments, a string representing the tag youd like the elemnet to represent, an object containing all the
// props that will be passed to the element, and then the children the element will wrap around, it can be JSX, additional createElement
// calls, or a string for text that should be rendered. 
  const createdElement = createElement(
    'h1',
    {},
    `Yo, ${nameFunc(user)}!`
  )

// Renders an element to the DOM. Can only render one element, and only one call works at a time. 
root.render(element)
root.render(getGreeting(user))
root.render(createdElement)