import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import cards from "./cards.json.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      cards: cards,
    };
  }
    render() {
      return(
        <main>
          <Navbar 
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <Jumbotron />
          <Container>
            <Row>
              <Column>
                {this.state.cards.map((card, i)  => {
                  return(
                    <Card
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                  )})}
              </Column>
            </Row>
          </Container>
      </main>
      );
    }
  }
export default App;
