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
    return React.createElement(
      'div',
      { id: 'main' },
      React.createElement(
        'button',
        { name: 'checkout', 'class': this.state[0], onClick: this.rerender },
        'Checkout'
      ),
      React.createElement('form', { action: '/', method: 'post' })
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZXJlbmRlciIsImJpbmQiLCJzdGF0ZSIsImkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYLFNBQUcsTUFEUTtBQUVYLFNBQUcsTUFGUTtBQUdYLFNBQUcsTUFIUTtBQUlYLFNBQUc7QUFKUSxLQUFiO0FBTUEsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQUgsYUFBVztBQUNUSSxZQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBO0FBQ0EsUUFBSUYsSUFBSSxLQUFLQSxDQUFiO0FBQ0EsU0FBS0csUUFBTCxDQUFjO0FBQ1osT0FBQ0gsQ0FBRCxHQUFLLE1BRE87QUFFWixPQUFDQSxJQUFJLENBQUwsR0FBUztBQUZHLEtBQWQ7QUFJQSxTQUFLQSxDQUFMO0FBQ0Q7QUFDREksV0FBUztBQUNQO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLE1BQVI7QUFDRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFVBQWIsRUFBd0IsU0FBTyxLQUFLTCxLQUFMLENBQVcsQ0FBWCxDQUEvQixFQUE4QyxTQUFTLEtBQUtGLFFBQTVEO0FBQUE7QUFBQSxPQURGO0FBRUUsb0NBQU0sUUFBTyxHQUFiLEVBQWlCLFFBQU8sTUFBeEI7QUFGRixLQURGO0FBTUQ7QUFsQytCOztBQXFDbENRLFNBQVNELE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlcmVuZGVyID0gdGhpcy5yZXJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgMDogJ3Nob3cnLFxyXG4gICAgICAxOiAnaGlkZScsXHJcbiAgICAgIDI6ICdoaWRlJyxcclxuICAgICAgMzogJ2hpZGUnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pID0gMDtcclxuICB9XHJcbiAgXHJcbiAgLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgICAgdGhpcy5yZXJlbmRlcigpO1xyXG4gIC8vICAgfVxyXG4gIHJlcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvbCcpO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlW3RoaXMuaV07XHJcbiAgICB2YXIgaSA9IHRoaXMuaTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbaV06ICdoaWRlJyxcclxuICAgICAgW2kgKyAxXTogJ3Nob3cnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaSsrO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBuYW1lPVwiY2hlY2tvdXRcIiBjbGFzcz17dGhpcy5zdGF0ZVswXX0gb25DbGljaz17dGhpcy5yZXJlbmRlcn0+Q2hlY2tvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIvXCIgbWV0aG9kPVwicG9zdFwiPjwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19