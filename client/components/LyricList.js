import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          <i class='material-icons' onClick={() => this.onLike(id)}>
            thumb-up
          </i>
        </li>
      );
    });
  }

  render() {
    return <ul className='collection'>{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
