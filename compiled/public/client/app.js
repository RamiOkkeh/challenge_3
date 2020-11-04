class App extends React.Component {
  constructor(props) {
    super(props);
    this.rerender = this.rerender.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      0: 'show',
      1: 'hide',
      2: 'hide',
      3: 'hide'
    };
    this.i = 0;
  }

  rerender() {
    var i = this.i;
    this.setState({
      [i]: 'hide',
      [i + 1]: 'show'
    });
    this.i++;
  }
  submit(e) {
    this.i = 0;
    this.setState({
      0: 'show',
      3: 'hide'
    });
    e.preventDefault();
    var dataArr = $('input');
    var data = {};
    for (var i = 0; i < dataArr.length; i++) {
      data[dataArr[i].name] = dataArr[i].value;
    }
    $.ajax({
      url: 'http://127.0.0.1:3002/checkout',
      method: 'POST',
      contentType: 'application/json',
      json: data,
      success: reply => {
        console.log('data: ', reply);$('#results').html(`<pre>${reply}</pre>`);
      },
      error: err => console.log('err: ', err)
    });
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
          { 'class': this.state[2], 'for': 'zipCode' },
          'Zip code:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'zipCode' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'phone' },
          'Phone Number:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { 'class': this.state[2], type: 'text', name: 'phone' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('input', { type: 'button', name: 'form2', 'class': this.state[2], onClick: this.rerender, value: 'Next' }),
        React.createElement(
          'h3',
          { 'class': this.state[3] },
          'Select Your Shipping Distination'
        ),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'creditNum' },
          'Credit card:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { 'class': this.state[3], type: 'text', name: 'creditNum' }),
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
        React.createElement('input', { type: 'submit', name: 'form3', 'class': this.state[3], onClick: this.submit, value: 'Complete Purchase' })
      ),
      React.createElement('div', { id: 'results' })
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZXJlbmRlciIsImJpbmQiLCJzdWJtaXQiLCJzdGF0ZSIsImkiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFBcnIiLCIkIiwiZGF0YSIsImxlbmd0aCIsIm5hbWUiLCJ2YWx1ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJjb250ZW50VHlwZSIsImpzb24iLCJzdWNjZXNzIiwicmVwbHkiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImVycm9yIiwiZXJyIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxTQUFLRSxLQUFMLEdBQWE7QUFDWCxTQUFHLE1BRFE7QUFFWCxTQUFHLE1BRlE7QUFHWCxTQUFHLE1BSFE7QUFJWCxTQUFHO0FBSlEsS0FBYjtBQU1BLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBRURKLGFBQVc7QUFDVCxRQUFJSSxJQUFJLEtBQUtBLENBQWI7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDWixPQUFDRCxDQUFELEdBQUssTUFETztBQUVaLE9BQUNBLElBQUksQ0FBTCxHQUFTO0FBRkcsS0FBZDtBQUlBLFNBQUtBLENBQUw7QUFDRDtBQUNERixTQUFPSSxDQUFQLEVBQVU7QUFDUixTQUFLRixDQUFMLEdBQVMsQ0FB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Q0FBekMsRUFBd0QsU0FBUyxLQUFLRCxNQUF0RSxFQUE4RSxPQUFNLG1CQUFwRjtBQTVERixPQUxGO0FBb0VFLG1DQUFLLElBQUcsU0FBUjtBQXBFRixLQURGO0FBd0VEO0FBckgrQjs7QUF3SGxDeUIsU0FBU0QsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCRSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucmVyZW5kZXIgPSB0aGlzLnJlcmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAwOiAnc2hvdycsXHJcbiAgICAgIDE6ICdoaWRlJyxcclxuICAgICAgMjogJ2hpZGUnLFxyXG4gICAgICAzOiAnaGlkZSdcclxuICAgIH07XHJcbiAgICB0aGlzLmkgPSAwO1xyXG4gIH1cclxuICBcclxuICByZXJlbmRlcigpIHtcclxuICAgIHZhciBpID0gdGhpcy5pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtpXTogJ2hpZGUnLFxyXG4gICAgICBbaSArIDFdOiAnc2hvdydcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgfVxyXG4gIHN1Ym1pdChlKSB7XHJcbiAgICB0aGlzLmkgPSAwO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIDA6ICdzaG93JyxcclxuICAgICAgMzogJ2hpZGUnXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBkYXRhQXJyID0gJCgnaW5wdXQnKTtcclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGF0YVtkYXRhQXJyW2ldLm5hbWVdID0gZGF0YUFycltpXS52YWx1ZTtcclxuICAgIH1cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMi9jaGVja291dCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBqc29uOiBkYXRhLFxyXG4gICAgICBzdWNjZXNzOiAocmVwbHkpID0+IHsgY29uc29sZS5sb2coJ2RhdGE6ICcsIHJlcGx5KTsgJCgnI3Jlc3VsdHMnKS5odG1sKGA8cHJlPiR7cmVwbHl9PC9wcmU+YCk7IH0sXHJcbiAgICAgIGVycm9yOiAoZXJyKSA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxyXG4gICAgICAgIDxidXR0b24gbmFtZT1cImNoZWNrb3V0XCIgY2xhc3M9e3RoaXMuc3RhdGVbMF19IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB7LyogZm9ybSAxICovfVxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9jaGVja291dFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz17dGhpcy5zdGF0ZVsxXX0+RW50ZXIgWW91ciBQZXJzb25hbCBJbmZvPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsxXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzFdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG5kb2UxMTNAZXhhbXBsZS5jb21cIiAvPiAgXHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwicGFzc1wiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc1wiIHBsYWNlaG9sZGVyPVwiZG8gbm90IHVzZSAxMjNcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZm9ybTFcIiBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gb25DbGljaz17dGhpcy5yZXJlbmRlcn0gdmFsdWU9XCJOZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIHsvKiBmb3JtIDIgKi99XHJcbiAgICAgICAgICA8aDMgY2xhc3M9e3RoaXMuc3RhdGVbMl19PlNlbGVjdCBZb3VyIFNoaXBwaW5nIERpc3RpbmF0aW9uPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gZm9yPVwiYWRkcmVzczFcIj5BZGRyZXNzMTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9e3RoaXMuc3RhdGVbMl19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cImFkZHJlc3MyXCI+QWRkcmVzczI6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19IC8+ICBcclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gZm9yPVwiY2l0eVwiPkNpdHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBmb3I9XCJzdGF0ZVwiPlN0YXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSAvPiAgXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cInppcENvZGVcIj5aaXAgY29kZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9e3RoaXMuc3RhdGVbMl19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcENvZGVcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSAvPiAgXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+ICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImZvcm0yXCIgY2xhc3M9e3RoaXMuc3RhdGVbMl19IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9IHZhbHVlPVwiTmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICB7LyogZm9ybSAzICovfVxyXG4gICAgICAgICAgPGgzIGNsYXNzPXt0aGlzLnN0YXRlWzNdfT5TZWxlY3QgWW91ciBTaGlwcGluZyBEaXN0aW5hdGlvbjwvaDM+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbM119IGZvcj1cImNyZWRpdE51bVwiPkNyZWRpdCBjYXJkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVszXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0TnVtXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVszXX0gLz4gXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbM119IGZvcj1cImV4cERhdGVcIj5FeHBlcmF0aW9uIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVszXX0vPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPXt0aGlzLnN0YXRlWzNdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBEYXRlXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVszXX0gLz4gXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbM119IGZvcj1cInppcFwiPlppcDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzNdfS8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9e3RoaXMuc3RhdGVbM119IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119IC8+IFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiZm9ybTNcIiBjbGFzcz17dGhpcy5zdGF0ZVszXX0gb25DbGljaz17dGhpcy5zdWJtaXR9IHZhbHVlPVwiQ29tcGxldGUgUHVyY2hhc2VcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD1cInJlc3VsdHNcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19