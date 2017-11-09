import React, { Component } from 'react';
import uuid from 'uuid';

class UserForm extends Component {
  constructor(){
    super();
    this.state = {
      user:{}
    }
  }
  
  static defaultProps = {
    countries: ['Argentina', 'Belize', 'Congo', 'United States'],
    states: ['California', 'North Carolina', 'Texas']
  }
  
  handleSubmit(e){
    if(this.refs.country.value === '' | this.refs.state.value === '' | this.refs.name.value === ''){
      alert('All fields required');
    }
    else{
      this.setState({user:{
        id:uuid.v4(),
        name:this.refs.name.value,
        country: this.refs.country.value,
        state: this.refs.state.value
      }}, function(){
        this.props.saveUser(this.state.user, this.state.user.name, this.state.user.country, this.state.user.state);
      })
    }
    e.preventDefault();
  }
  
  render() {
    let countryOptions = this.props.countries.map(country => {
      return <option key={country} value={country}>{country}</option>
    });
    let stateOptions = this.props.states.map(state => {
      return <option key={state} value={state}>{state}</option>
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input type="text" ref="name" />
          </div>
          <br />
          <div>
            <label>Country</label><br />
            <select ref="country">
              {countryOptions}
            </select>
          </div>
          <br />
          <div>
            <label>State</label><br />
            <select ref="state">
              {stateOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserForm;