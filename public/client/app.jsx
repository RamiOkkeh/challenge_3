class App extends React.Component {
  constructor(props) {
    super(props);
    this.rerender = this.rerender.bind(this);
    this.state = {
      0: 'show',
      1: 'hide',
      2: 'hide',
      3: 'hide'
    };
    this.i = 0;
  }
  
  //   componentDidMount() {
  //     this.rerender();
  //   }
  rerender() {
    console.log('lol');
    // document.getElementById('main').innerHTML = this.state[this.i];
    var i = this.i;
    this.setState({
      [i]: 'hide',
      [i + 1]: 'show'
    });
    this.i++;
  }
  render() {
    //   var that = this;
    return (
      <div id="main">
        <button name="checkout" class={this.state[0]} onClick={this.rerender}>Checkout</button>
        <form action="/" method="post"></form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));