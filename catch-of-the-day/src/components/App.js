import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the exsitting state
    // becasue in js you need edit directly
    const fishes = { ...this.state.fishes };
    //2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. set the new fishes object to state
    this.setState({
      fishes: fishes
    });
    //
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
    console.log(this.state.fishes);
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Phuc is cool" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => {
              //   console.log(key);

              return <Fish key={key} details={this.state.fishes[key]} />;
            })}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
