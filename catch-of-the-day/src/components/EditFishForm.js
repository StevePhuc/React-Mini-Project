import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    //update that fish
    const updateFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updateFish);
  };
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          value={name}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="price"
          value={price}
        />
        <select onChange={this.handleChange} name="status" value={status}>
          <option value="availabel">Fresh!</option>
          <option value="unavailabel">Sold old!</option>
        </select>
        <textarea onChange={this.handleChange} name="desc" value={desc} />
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
