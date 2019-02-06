import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import yugioh from "./yugioh.json";

class App extends Component {
  // Setting this.state.yugioh to the yugioh json array
  state = {
    yugioh
  };

  removeFriend = id => {
    // Filter this.state.yugioh for yugioh with an id not equal to the id being removed
    const yugioh = this.state.yugioh.filter(friend => friend.id !== id);
    // Set this.state.yugioh equal to the new yugioh array
    this.setState({ yugioh });
  };

  // Map over this.state.yugioh and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.yugioh.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
