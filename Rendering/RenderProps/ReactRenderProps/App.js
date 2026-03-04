class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div>
        <Amount
          amount={this.state.amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />

        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
      </div>
    );
  }
}

const Amount = ({ amount, onIncrement, onDecrement }) => (
  <div>
    <span>US Dollar: {amount} </span>

    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
  </div>
);