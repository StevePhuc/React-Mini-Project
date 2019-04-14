import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  addToOrder = key => {
    //  1. take a coupy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Phuc is cool" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => {
              //   console.log(key);

              return (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
