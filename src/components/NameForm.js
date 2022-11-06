import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {textValue: '', selectValue: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      // destructuring name and value from event.target.
      const {name, value} = event.target
      // Using an index signature to determine which state to update based on the event.target's name, sets state to teh event.targets 
      // value. 
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      // utilizing the synthetic event input to prevent default behaviour of the form refreshing the page on submit
      event.preventDefault();
    }
    

    // By default forms in react have the typical form behaviour of browsing to a new page when a user submits the form. in most
    // cases though you want to have an onSubmit event listener that runs an event handler function that handles the submmission
    // and has access to the data the user entered in the form. The process of doing this is called controlled components. 

    // In HTML inputs usually maintain their own state, and update it based on user input. In React components mutable state is 
    // usually kept in the state property, and updated through setState. We can combine the two by setting the value of inputs to
    // be determined by state, and allowing users to alter state on input using an eventHandler and the synthetic event argument.
    // An input whose value is controlled by React in this way is called a controlled component
    render() {
      return (
        // To handle multiple form elements with one eventHandler give each element a name attribute, can then use an index signature 
        // to determine what state to change based on the name of the event.target. Should make the name the same as the state that controls 
        // the input.
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name='textValue' type="text" value={this.state.textValue} onChange={this.handleChange} />
          </label>
          <label>
          {/* Dropdown values are chosen by passing the state and event listener on the select tag, initial choice is determined by 
          initial state. you can  */}
          Pick your favorite flavor:
          <select name='selectValue' value={this.state.selectValue} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm 