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
    return React.createElement('div', { id: 'main' });
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImkiLCJjb21wb25lbnREaWRNb3VudCIsInJlcmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJlbmRlciIsImMiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWCxTQUFHLHNEQURRO0FBRVgsU0FBRztBQUZRLEtBQWI7QUFJQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNEOztBQUVEQyxzQkFBb0I7QUFDbEIsU0FBS0MsUUFBTDtBQUNEO0FBQ0RBLGFBQVc7QUFDVEMsYUFBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsU0FBaEMsR0FBNEMsS0FBS04sS0FBTCxDQUFXLEtBQUtDLENBQWhCLENBQTVDO0FBQ0EsU0FBS0EsQ0FBTDtBQUNEO0FBQ0RNLFdBQVM7QUFDUDtBQUNBLFFBQUlDLElBQUksWUFBWTtBQUNsQkMsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRCxLQUZEO0FBR0EsV0FDRSw2QkFBSyxJQUFHLE1BQVIsR0FERjtBQUtEO0FBM0IrQjs7QUE4QmxDQyxTQUFTSixNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJILFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgMDogJzxidXR0b24gbmFtZT1cImNoZWNrb3V0XCIgb25jbGljaz1cIlwiPkNoZWNrb3V0PC9idXR0b24+JyxcclxuICAgICAgMTogJzxidXR0b24+J1xyXG4gICAgfTtcclxuICAgIHRoaXMuaSA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5yZXJlbmRlcigpO1xyXG4gIH1cclxuICByZXJlbmRlcigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MID0gdGhpcy5zdGF0ZVt0aGlzLmldO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==