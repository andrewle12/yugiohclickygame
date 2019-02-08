//Importing components
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import yugiohs from "./yugioh.json";

var shuffle = require("shuffle-array");

//App class and initial states
class App extends Component {
  state = {
    yugiohs,
    currentScore: 0,
    highScore: 0
  };

  //Function for when card is clicked
  removeFriend = event => {
    let pickedcard = event.currentTarget;
    let status = JSON.parse(pickedcard.getAttribute("isclicked"));

    //array of all cards
    const allcards = document.querySelectorAll(".card");
    console.log(allcards);

    //Set score when card is picked
    if (status === true) {
      this.setState({ currentScore: 0 });
      if (this.state.currentScore > this.state.highScore) {
        this.setState({ highScore: this.state.currentScore });
      }

      //reset card clicked attribute
      for (let i = 0; i < allcards.length; i++) {
        allcards[i].setAttribute("isclicked", "false");
      }
    }
    //card has not been picked
    else {
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
        <Title />
        <div id="text">
          {" "}
          High Score: {this.state.highScore}
          <br />
          Current Score: {this.state.currentScore}
          <br />
        </div>
        <br />
        {shuffle(friends)}
      </Wrapper>
    );
  }
}

export default App;
