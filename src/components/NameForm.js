import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm 