import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import yugiohs from "./yugioh.json";

class App extends Component {
  // Setting this.state.yugioh to the yugioh json array
  state = {
    yugiohs,
    currentScore: 0,
    highScore: 0
  };

  removeFriend = event => {
    console.log(event.currentTarget.getAttribute("isclicked"));
    let pickedcard = event.currentTarget;
    let status = JSON.parse(pickedcard.getAttribute("isclicked"));

    if (status === true) {
      this.setState({ currentScore: 0 });
      if (this.state.currentScore > this.state.highScore) {
        this.setState({ highScore: this.state.currentScore });
      }

      const allcards = document.getElementsByClassName("card");

      for (let i = 0; i < allcards.length; i++) {
        allcards[i].setAttribute("isclicked", "false");
      }
    } else {
      this.setState({ currentScore: this.state.currentScore + 1 });
      pickedcard.setAttribute("isclicked", "true");
    }
  };

  // Map over this.state.yugioh and render a FriendCard component for each friend object
  render() {
    const friends = this.state.yugiohs.map(yugioh => (
      <FriendCard
        removeFriend={this.removeFriend.bind(this)}
        id={yugioh.id}
        key={yugioh.id}
        src={yugioh.image}
      />
    ));
    return (
      <Wrapper>
        <br />
        High Score: {this.state.highScore}
        <br />
        Current Score: {this.state.currentScore}
        <Title />
        {friends}
      </Wrapper>
    );
  }
}

export default App;
