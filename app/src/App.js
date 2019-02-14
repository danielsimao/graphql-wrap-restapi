import React, { Component } from "react";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yo</h1>
      </div>
    );
  }
}

export const CharacterQuery = gql`
  query Characters($limit: Int) {
    getCharacters(limit: $limit) {
      code
      data {
        results {
          name
          description
          thumbnail {
            path
            extension
          }
        }
      }
    }
  }
`;

export default compose(
  graphql(CharacterQuery, {
    name: "characters",
    options: ({}) => ({
      variables: {
        limit: 2
      }
    }),
    props: ({ characters: { getCharacters, error } }) => ({
      characters: getCharacters,
      error
    })
  })
)(App);
