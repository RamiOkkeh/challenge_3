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
      React.createElement(
        'form',
        { action: '/checkout', method: 'post' },
        React.createElement(
          'h3',
          { 'class': this.state[1] },
          'Enter Your Personal Info'
        ),
        React.createElement(
          'label',
          { 'class': this.state[1], 'for': 'name' },
          'Name:'
        ),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('input', { 'class': this.state[1], type: 'text', name: 'name', placeholder: 'John Doe' }),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement(
          'label',
          { 'class': this.state[1], 'for': 'email' },
          'Email:'
        ),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('input', { 'class': this.state[1], type: 'text', name: 'email', placeholder: 'johndoe113@example.com' }),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement(
          'label',
          { 'class': this.state[1], 'for': 'pass' },
          'Password:'
        ),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('input', { 'class': this.state[1], type: 'text', name: 'pass', placeholder: 'do not use 123' }),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('input', { type: 'button', name: 'form1', 'class': this.state[1], onClick: this.rerender, value: 'Next' }),
        React.createElement(
          'h3',
          { 'class': this.state[2] },
          'Select Your Shipping Distination'
        ),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'address1' },
          'Address1:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'address1' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'address2' },
          'Address2:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'address2' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'city' },
          'City:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'city' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'state' },
          'State:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'state' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'zip code' },
          'Zip code:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'zip code' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { type: 'button', name: 'form2', 'class': this.state[2], onClick: this.rerender, value: 'Next' }),
        React.createElement(
          'h3',
          { 'class': this.state[3] },
          'Select Your Shipping Distination'
        ),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'creditCard' },
          'Credit card:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { 'class': this.state[3], type: 'text', name: 'creditCard' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'expDate' },
          'Experation Date:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { 'class': this.state[3], type: 'text', name: 'expDate' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'zip' },
          'Zip:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { 'class': this.state[3], type: 'text', name: 'zip' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { type: 'submit', name: 'form3', 'class': this.state[3], onClick: this.rerender, value: 'Complete Purchase' })
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZXJlbmRlciIsImJpbmQiLCJzdGF0ZSIsImkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYLFNBQUcsTUFEUTtBQUVYLFNBQUcsTUFGUTtBQUdYLFNBQUcsTUFIUTtBQUlYLFNBQUc7QUFKUSxLQUFiO0FBTUEsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQUgsYUFBVztBQUNUSSxZQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBO0FBQ0EsUUFBSUYsSUFBSSxLQUFLQSxDQUFiO0FBQ0EsU0FBS0csUUFBTCxDQUFjO0FBQ1osT0FBQ0gsQ0FBRCxHQUFLLE1BRE87QUFFWixPQUFDQSxJQUFJLENBQUwsR0FBUztBQUZHLEtBQWQ7QUFJQSxTQUFLQSxDQUFMO0FBQ0Q7QUFDREksV0FBUztBQUNQO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLE1BQVI7QUFDRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFVBQWIsRUFBd0IsU0FBTyxLQUFLTCxLQUFMLENBQVcsQ0FBWCxDQUEvQixFQUE4QyxTQUFTLEtBQUtGLFFBQTVEO0FBQUE7QUFBQSxPQURGO0FBS0U7QUFBQTtBQUFBLFVBQU0sUUFBTyxXQUFiLEVBQXlCLFFBQU8sTUFBaEM7QUFDRTtBQUFBO0FBQUEsWUFBSSxTQUFPLEtBQUtFLEtBQUwsQ0FBVyxDQUFYLENBQVg7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsT0FBSSxNQUFqQztBQUFBO0FBQUEsU0FGRjtBQUdFLG9DQUFJLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBWCxHQUhGO0FBSUUsdUNBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsTUFBSyxNQUE5QyxFQUFxRCxhQUFZLFVBQWpFLEdBSkY7QUFLRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FMRjtBQU1FO0FBQUE7QUFBQSxZQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixPQUFJLE9BQWpDO0FBQUE7QUFBQSxTQU5GO0FBT0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBUEY7QUFRRSx1Q0FBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxNQUFLLE9BQTlDLEVBQXNELGFBQVksd0JBQWxFLEdBUkY7QUFTRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FURjtBQVVFO0FBQUE7QUFBQSxZQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixPQUFJLE1BQWpDO0FBQUE7QUFBQSxTQVZGO0FBV0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBWEY7QUFZRSx1Q0FBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxNQUFLLE1BQTlDLEVBQXFELGFBQVksZ0JBQWpFLEdBWkY7QUFhRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FiRjtBQWNFLHVDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLE9BQTFCLEVBQWtDLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBekMsRUFBd0QsU0FBUyxLQUFLRixRQUF0RSxFQUFnRixPQUFNLE1BQXRGLEdBZEY7QUFrQkU7QUFBQTtBQUFBLFlBQUksU0FBTyxLQUFLRSxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQUE7QUFBQSxTQWxCRjtBQW1CRTtBQUFBO0FBQUEsWUFBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsT0FBSSxVQUFqQztBQUFBO0FBQUEsU0FuQkY7QUFvQkUsb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBcEJGO0FBcUJFLHVDQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixNQUFLLE1BQWxDLEVBQXlDLE1BQUssVUFBOUMsR0FyQkY7QUFzQkUsb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBdEJGO0FBdUJFO0FBQUE7QUFBQSxZQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixPQUFJLFVBQWpDO0FBQUE7QUFBQSxTQXZCRjtBQXdCRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0F4QkY7QUF5QkUsdUNBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsTUFBSyxVQUE5QyxHQXpCRjtBQTBCRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0ExQkY7QUEyQkU7QUFBQTtBQUFBLFlBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE9BQUksTUFBakM7QUFBQTtBQUFBLFNBM0JGO0FBNEJFLG9DQUFJLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBWCxHQTVCRjtBQTZCRSx1Q0FBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxNQUFLLE1BQTlDLEdBN0JGO0FBOEJFLG9DQUFJLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBWCxHQTlCRjtBQStCRTtBQUFBO0FBQUEsWUFBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsT0FBSSxPQUFqQztBQUFBO0FBQUEsU0EvQkY7QUFnQ0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBaENGO0FBaUNFLHVDQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixNQUFLLE1BQWxDLEVBQXlDLE1BQUssT0FBOUMsR0FqQ0Y7QUFrQ0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBbENGO0FBbUNFO0FBQUE7QUFBQSxZQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixPQUFJLFVBQWpDO0FBQUE7QUFBQSxTQW5DRjtBQW9DRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FwQ0Y7QUFxQ0UsdUNBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsTUFBSyxVQUE5QyxHQXJDRjtBQXNDRSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0F0Q0Y7QUF1Q0UsdUNBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssT0FBMUIsRUFBa0MsU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUF6QyxFQUF3RCxTQUFTLEtBQUtGLFFBQXRFLEVBQWdGLE9BQU0sTUFBdEYsR0F2Q0Y7QUEyQ0U7QUFBQTtBQUFBLFlBQUksU0FBTyxLQUFLRSxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQUE7QUFBQSxTQTNDRjtBQTRDRTtBQUFBO0FBQUEsWUFBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsT0FBSSxZQUFqQztBQUFBO0FBQUEsU0E1Q0Y7QUE2Q0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBN0NGO0FBOENFLHVDQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixNQUFLLE1BQWxDLEVBQXlDLE1BQUssWUFBOUMsR0E5Q0Y7QUErQ0Usb0NBQUksU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBL0NGO0FBZ0RFO0FBQUE7QUFBQSxZQUFPLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixPQUFJLFNBQWpDO0FBQUE7QUFBQSxTQWhERjtBQWlERSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FqREY7QUFrREUsdUNBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsTUFBSyxTQUE5QyxHQWxERjtBQW1ERSxvQ0FBSSxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQVgsR0FuREY7QUFvREU7QUFBQTtBQUFBLFlBQU8sU0FBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFkLEVBQTZCLE9BQUksS0FBakM7QUFBQTtBQUFBLFNBcERGO0FBcURFLG9DQUFJLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBWCxHQXJERjtBQXNERSx1Q0FBTyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxNQUFLLEtBQTlDLEdBdERGO0FBdURFLG9DQUFJLFNBQU8sS0FBS0EsS0FBTCxDQUFXLENBQVgsQ0FBWCxHQXZERjtBQXdERSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxTQUFPLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLENBQXpDLEVBQXdELFNBQVMsS0FBS0YsUUFBdEUsRUFBZ0YsT0FBTSxtQkFBdEY7QUF4REY7QUFMRixLQURGO0FBa0VEO0FBOUYrQjs7QUFpR2xDUSxTQUFTRCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJFLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5yZXJlbmRlciA9IHRoaXMucmVyZW5kZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIDA6ICdzaG93JyxcclxuICAgICAgMTogJ2hpZGUnLFxyXG4gICAgICAyOiAnaGlkZScsXHJcbiAgICAgIDM6ICdoaWRlJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuaSA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICAgIHRoaXMucmVyZW5kZXIoKTtcclxuICAvLyAgIH1cclxuICByZXJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2wnKTtcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MID0gdGhpcy5zdGF0ZVt0aGlzLmldO1xyXG4gICAgdmFyIGkgPSB0aGlzLmk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2ldOiAnaGlkZScsXHJcbiAgICAgIFtpICsgMV06ICdzaG93J1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmkrKztcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxyXG4gICAgICAgIDxidXR0b24gbmFtZT1cImNoZWNrb3V0XCIgY2xhc3M9e3RoaXMuc3RhdGVbMF19IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB7LyogZm9ybSAxICovfVxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9jaGVja291dFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz17dGhpcy5zdGF0ZVsxXX0+RW50ZXIgWW91ciBQZXJzb25hbCBJbmZvPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsxXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzFdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG5kb2UxMTNAZXhhbXBsZS5jb21cIiAvPiAgXHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwicGFzc1wiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc1wiIHBsYWNlaG9sZGVyPVwiZG8gbm90IHVzZSAxMjNcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZm9ybTFcIiBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gb25DbGljaz17dGhpcy5yZXJlbmRlcn0gdmFsdWU9XCJOZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIHsvKiBmb3JtIDIgKi99XHJcbiAgICAgICAgICA8aDMgY2xhc3M9e3RoaXMuc3RhdGVbMl19PlNlbGVjdCBZb3VyIFNoaXBwaW5nIERpc3RpbmF0aW9uPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gZm9yPVwiYWRkcmVzczFcIj5BZGRyZXNzMTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9e3RoaXMuc3RhdGVbMl19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cImFkZHJlc3MyXCI+QWRkcmVzczI6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19IC8+ICBcclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gZm9yPVwiY2l0eVwiPkNpdHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBmb3I9XCJzdGF0ZVwiPlN0YXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSAvPiAgXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cInppcCBjb2RlXCI+WmlwIGNvZGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXAgY29kZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz4gIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZm9ybTJcIiBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gb25DbGljaz17dGhpcy5yZXJlbmRlcn0gdmFsdWU9XCJOZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIHsvKiBmb3JtIDMgKi99XHJcbiAgICAgICAgICA8aDMgY2xhc3M9e3RoaXMuc3RhdGVbM119PlNlbGVjdCBZb3VyIFNoaXBwaW5nIERpc3RpbmF0aW9uPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVszXX0gZm9yPVwiY3JlZGl0Q2FyZFwiPkNyZWRpdCBjYXJkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVszXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0Q2FyZFwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119IC8+IFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSBmb3I9XCJleHBEYXRlXCI+RXhwZXJhdGlvbiBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVszXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwRGF0ZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119IC8+IFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSBmb3I9XCJ6aXBcIj5aaXA6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVszXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzNdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSAvPiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImZvcm0zXCIgY2xhc3M9e3RoaXMuc3RhdGVbM119IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9IHZhbHVlPVwiQ29tcGxldGUgUHVyY2hhc2VcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19