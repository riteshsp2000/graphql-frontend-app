import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className='collection-item'>
          {song.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props);

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className='collection'>
        <div>{this.renderSongs()}</div>
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
