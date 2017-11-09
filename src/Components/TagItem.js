import React, { Component } from 'react';

class TagItem extends Component {
  render() {
    const { tag, deleteTag } = this.props;
    
    var litersPerKilo = tag.litersPerKilo + '';
    if (tag.litersPerKilo === -1) {
      litersPerKilo = '';
    }

    return (
      <tr>
          <td><label>{tag.name}</label></td>
          <td><label>{litersPerKilo}</label></td>
          <td><button className="deleteTagButton" onClick={() => deleteTag(tag.id)}>X</button></td>
      </tr>
    );
  }
}

export default TagItem;