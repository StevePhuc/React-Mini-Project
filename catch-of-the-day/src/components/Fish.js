import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    return (
      <li className="menu-fish">
        {<img src={image} />}
        <h3 className="fish-na">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button> Add to card </button>
      </li>
    );
  }
}

export default Fish;
