class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: '<button name="checkout" onclick="">Checkout</button>',
      1: '<button>'
    };
    this.i = 0;
  }
  
  componentDidMount() {
    this.rerender();
  }
  rerender() {
    document.getElementById('main').innerHTML = this.state[this.i];
    this.i++;
  }
  render() {
    //   var that = this;
    var c = function () {
      console.log(this);
    };
    return (
      <div id="main">
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));