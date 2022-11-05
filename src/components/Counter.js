import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: 0,
            favorite: true
        }

        // this.increment = this.increment.bind(this)
    }

    // Multiple setState calls would generally each trigger a rerender from React, but if youre making multiple seState calls in one
    // component at once this can be very ineffecient and cause a component and its children to rerender more than needed. So now
    // all set state calls in a component are batched into one update in order to prevent unnecessary rerenders. This makes setState
    // asynchronous, because of this you cannot rely on current state to calculate next state, such as in a counter. THis is because
    // when setState is added to the callback queue it is passed the current state at the time of it being invoked. So even if you 
    // made 100 calls to increment a count state none of them have actually changed the state by the time the last one is invoked, 
    // so the count will still only ever increment by 1
   
    // Your event handlers should be a method on the class, class methods are not bound to the this of the class by default though.
    // You should bind them manually in the constructor. Otherwise this will be undefined when you go to pass them to an event listener. 
    // 
    increment() {
        // both calls rely on current state at time of the call for incrementing, because setState is async you can make this call
        // infinite times, but none of the calls will know about the incrementation done by any of the others, so the state will only 
        // increment once per event
        this.setState({count: this.state.count + this.props.increment})
        this.setState({count: this.state.count + this.props.increment})
        console.log(this.state.count)

        // There is a callback you can pass to setState, it takes in the previous state from the output of last setState call, and the 
        // current props at time of update as inputs. It always operates based off the output of the last setState call, so if you 
        // had 4 other setState calls before it that were also utilizing the call back it would increment by 5, but putting just
        // one call that doesnt utilize the callback between them would make it increment only by 2, this is because without the callback 
        // the setState call wouldnt know about the state outputted by the 4 calls before it, and would operate off the current state 
        // of 0. Meaning the last setState call which utilizes the callback would be working with a prevState of 1. 
        // this.setState((prev, props) => ({count: prev.count + props.increment}))
        // this.setState((prev, props) => ({count: prev.count + props.increment}))
        // this.setState((prev, props) => ({count: prev.count + props.increment}))
        // this.setState((prev, props) => ({count: prev.count + props.increment}))
        // this.setState({count: this.state.count + this.props.increment})
        // this.setState((prev, props) => ({count: prev.count + props.increment}))

        // when you call setState React merges the object you provide with the current state. So if you have multiple states defined.
        // in this.state you can make individual setState calls to change those states and only the states referenced in those calls 
        // will be changed. 
        // if your state is this.state = {count: 0, favorite: true} like in this componnet for example. You could make this setState call
        this.setState({favorite: false})
        // This is what it would actually be converted to under the hood before setting the state. A shallow merge
        this.setState(prevState => ({...prevState, favorite: false}))
        // And the state would then be this this.state = {count: 0, favorite: false}
    }

    // Neither child nor parent should need to know whether a component is stateful or not, state is encapsulated entirely within 
    // the component it is defined, and can only be changed from that component. State data may be passed to children as props. 
    // This does not give the child any indication that its props are state or where they came from though. 
    // React has a unidirectional data flow, meaning that state is always owned by the component it is defined, and any data derived
    // from state can only be passed downwards through props. 
    render() {
        return (
            <div>
                <button>-</button>
                <h1>{this.state.count}</h1>
                {/* Handling events in React is very similar to how its done with DOM elements, except the naming convention is 
                camelCase, and with JSX you pass a function as the eventHandler instead of a string. You also cant return false to 
                prevent default behaviour. You have to call the event.preventDefault method explicitly. The event object is a synthetic 
                event passed into the event handler from the JSX node the event is occuring. */}
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

//  const Count = (props) => {
//     const [count, setCount] = React.useState(0)

//     const increment = () => {
//         setCount(count + props.increment)
//         setCount(count + props.increment)
//         setCount(prev => prev + props.increment)
//         console.log(count)
//     }

//     return (
//         <div>
//             <button>-</button>
//             <h1>{count}</h1>
//             <button onClick={increment}>+</button>
//         </div>
//     )
// }

