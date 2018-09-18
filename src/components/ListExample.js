import React from "react";

class ListExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [ 42, 23, 12, 27, 13, 4 ]
    };
  }

  addNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Add a NEW NUMBER! 1️⃣2️⃣3️⃣", randomNumber);

    const { numbers } = this.state;
    numbers.push(randomNumber);

    // tell React to update the DOM with setState()
    this.setState({ numbers });
  }

  render() {
    const { numbers } = this.state;
    const listItems =
      numbers.map((oneNumber, index) =>
        <li key={index}>{oneNumber}</li>);

    return (
      <section>
        <h2>List Example</h2>
        <button onClick={() => this.addNumber()}>
          Add a Number
        </button>

        <ul>
          {listItems}
        </ul>
      </section>
    );
  }
}

export default ListExample;
