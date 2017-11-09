import React, { Component } from 'react';
import TagItem from './TagItem';

class TagList extends Component {
  render() {
    const { tags, deleteTag } = this.props;
    
    return (
      <section className="main">
        <table className="tag-list">
          <tr>
            <th>Food</th>
            <th>Liters/kg</th>
            <th></th>
          </tr>
          {tags.map(tag => {
            return (
              <TagItem
                tag={tag}
                deleteTag={deleteTag}
              />
            );
          })}
        </table>
      </section>
    );
  }
}

export default TagList;