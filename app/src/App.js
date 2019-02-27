import React, { Component } from "react";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import Header from "./components/Header";
import { Button } from "antd";
import Character from "./components/Character";

// const mocked = {
//   description:
//     "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
//   name: "A-Bomb (HAS)",
//   thumbnail: {
//     extension: "jpg",
//     path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16"
//   }
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="w-25" />
        <Character />
      </div>
    );
  }
}

// <div className="App">
//   <h1>Yo</h1>
// </div>

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
