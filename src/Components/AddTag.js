import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

class AddTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = event => {
    // event.which tells us what key triggered the event
    if (event.which === ENTER_KEY_CODE) {
      const text = event.target.value.trim();
      this.props.addTag(text);
      this.setState({ text: '' });
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div class="new-tag-div">
        <input
          type="text"
          className="new-tag"
          placeholder="Add food..."
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddTag;
