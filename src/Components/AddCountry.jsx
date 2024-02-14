import React, { Component } from 'react';

class AddCountry extends Component {
  state = {
    name: "",
    display: false,
  }

  toggleForm = () => {
    const { display } = this.state;
    this.setState({ display : !display });
    if (display) {
      this.setState({ name: '' });
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
  AddCountry = () => { 
    const { name } = this.state;
    this.props.onAdd(name);
    this.toggleForm();
  }
  render() {
    const {display, name} = this.state;
    
    return (

    
      <div>

          {
            (display) ?

            <form>
            <input 
              type="text"
              id="name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              placeholder="country"
              autoFocus
              autoComplete="off" />
          
            <button 
         
              onClick={ this.AddCountry } 
              type="button"
              disabled={ name.trim().length === 0 } >
              Save
            </button>

          </form>

          :

          <button onClick={this.toggleForm}  className='Toggle-form'>New Country</button>

          }
           
    
        
      </div>
    );
  }
}

export default AddCountry;
