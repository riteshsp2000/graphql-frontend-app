import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return <li>{song.title}</li>;
    });
  }

  render() {
    if (!this.props.data.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    return (
      <div>
        <div>{this.renderSongs}</div>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
