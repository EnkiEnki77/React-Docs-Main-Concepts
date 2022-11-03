// A package that provides DOM specific methods that can be used at the top level of your app. 
import {createRoot} from "react-dom";

// Creates a React root for the supplied div container, and then returns the root to be assigned to variable. The root is used 
// to render elements into the DOM using render(). The root container wraps all components in the DOM tree.
const root = createRoot(document.getElementById('root'))
// Renders a header to the DOM, this may look like html, but it's actually JSX.
root.render(<h1>Hello World</h1>)