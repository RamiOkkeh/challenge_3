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
    var dataArr = $('textarea');
    var dataArr2 = $('input');
    console.log(dataArr);
    var data = {};
    for (var i = 0; i < dataArr.length; i++) {
      data[dataArr[i].name] = dataArr[i].value;
      if (dataArr2[i]) {
        data[dataArr2[i].name] = dataArr2[i].value;
      }
    }
    console.log(data);
    $.ajax({
      url: 'http://127.0.0.1:3002/checkout',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: reply => {
        console.log('data: ', reply);$('#results').html(`<pre>${reply}</pre>`);this.get();
      },
      error: err => console.log('err: ', err)
    });
  }
  get() {
    $.ajax({
      url: 'http://127.0.0.1:3002/checkout',
      method: 'GET',
      success: reply => {
        console.log('data: ', reply);
        var str = '';
        // for (let i = 0; i < reply.length; i++) {
        const elem = reply[reply.length - 1];
        for (var key in elem) {
          str += key + ': ';
          str += elem[key] + '\n';
        }
        // }
        $('#results2').html(`<pre>${str}</pre>`);
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
        React.createElement('textarea', { 'class': this.state[1], type: 'text', name: 'name', placeholder: 'John Doe' }),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement(
          'label',
          { 'class': this.state[1], 'for': 'email' },
          'Email:'
        ),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('textarea', { 'class': this.state[1], type: 'text', name: 'email', placeholder: 'johndoe113@example.com' }),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement(
          'label',
          { 'class': this.state[1], 'for': 'pass' },
          'Password:'
        ),
        React.createElement('br', { 'class': this.state[1] }),
        React.createElement('input', { 'class': this.state[1], id: 'pass', type: 'password', name: 'pass', placeholder: 'do not use 123' }),
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
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'address1' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'address2' },
          'Address2:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'address2' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'city' },
          'City:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'city' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'state' },
          'State:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'state' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'zipCode' },
          'Zip code:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'zipCode' }),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement(
          'label',
          { 'class': this.state[2], 'for': 'phone' },
          'Phone Number:'
        ),
        React.createElement('br', { 'class': this.state[2] }),
        React.createElement('textarea', { 'class': this.state[2], type: 'text', name: 'phone' }),
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
        React.createElement('textarea', { 'class': this.state[3], type: 'text', name: 'creditNum' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'expDate' },
          'Experation Date:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('textarea', { 'class': this.state[3], type: 'text', name: 'expDate' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement(
          'label',
          { 'class': this.state[3], 'for': 'zip' },
          'Zip:'
        ),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('textarea', { 'class': this.state[3], type: 'text', name: 'zip' }),
        React.createElement('br', { 'class': this.state[3] }),
        React.createElement('input', { type: 'submit', name: 'form3', 'class': this.state[3], onClick: this.submit, value: 'Complete Purchase' })
      ),
      React.createElement('div', { id: 'results' }),
      React.createElement('div', { id: 'results2' })
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZXJlbmRlciIsImJpbmQiLCJzdWJtaXQiLCJzdGF0ZSIsImkiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFBcnIiLCIkIiwiZGF0YUFycjIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxlbmd0aCIsIm5hbWUiLCJ2YWx1ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwicmVwbHkiLCJodG1sIiwiZ2V0IiwiZXJyb3IiLCJlcnIiLCJzdHIiLCJlbGVtIiwia2V5IiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxTQUFLRSxLQUFMLEdBQWE7QUFDWCxTQUFHLE1BRFE7QUFFWCxTQUFHLE1BRlE7QUFHWCxTQUFHLE1BSFE7QUFJWCxTQUFHO0FBSlEsS0FBYjtBQU1BLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBRURKLGFBQVc7QUFDVCxRQUFJSSxJQUFJLEtBQUtBLENBQWI7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDWixPQUFDRCxDQUFELEdBQUssTUFETztBQUVaLE9BQUNBLElBQUksQ0FBTCxHQUFTO0FBRkcsS0FBZDtBQUlBLFNBQUtBLENBQUw7QUFD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QytCLFNBQVNELE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlcmVuZGVyID0gdGhpcy5yZXJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgMDogJ3Nob3cnLFxyXG4gICAgICAxOiAnaGlkZScsXHJcbiAgICAgIDI6ICdoaWRlJyxcclxuICAgICAgMzogJ2hpZGUnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pID0gMDtcclxuICB9XHJcbiAgXHJcbiAgcmVyZW5kZXIoKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMuaTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbaV06ICdoaWRlJyxcclxuICAgICAgW2kgKyAxXTogJ3Nob3cnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaSsrO1xyXG4gIH1cclxuICBzdWJtaXQoZSkge1xyXG4gICAgdGhpcy5pID0gMDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAwOiAnc2hvdycsXHJcbiAgICAgIDM6ICdoaWRlJ1xyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZGF0YUFyciA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICB2YXIgZGF0YUFycjIgPSAkKCdpbnB1dCcpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YUFycik7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRhdGFbZGF0YUFycltpXS5uYW1lXSA9IGRhdGFBcnJbaV0udmFsdWU7XHJcbiAgICAgIGlmIChkYXRhQXJyMltpXSkge1xyXG4gICAgICAgIGRhdGFbZGF0YUFycjJbaV0ubmFtZV0gPSBkYXRhQXJyMltpXS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDIvY2hlY2tvdXQnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXBseSkgPT4geyBjb25zb2xlLmxvZygnZGF0YTogJywgcmVwbHkpOyAkKCcjcmVzdWx0cycpLmh0bWwoYDxwcmU+JHtyZXBseX08L3ByZT5gKTsgdGhpcy5nZXQoKTsgfSxcclxuICAgICAgZXJyb3I6IChlcnIpID0+IGNvbnNvbGUubG9nKCdlcnI6ICcsIGVycilcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXQoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDIvY2hlY2tvdXQnLFxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBzdWNjZXNzOiAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YTogJywgcmVwbHkpO1xyXG4gICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGx5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHJlcGx5W3JlcGx5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBlbGVtKSB7XHJcbiAgICAgICAgICBzdHIgKz0ga2V5ICsgJzogJztcclxuICAgICAgICAgIHN0ciArPSBlbGVtW2tleV0gKyAnXFxuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICQoJyNyZXN1bHRzMicpLmh0bWwoYDxwcmU+JHtzdHJ9PC9wcmU+YCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyKSA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxyXG4gICAgICAgIDxidXR0b24gbmFtZT1cImNoZWNrb3V0XCIgY2xhc3M9e3RoaXMuc3RhdGVbMF19IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB7LyogZm9ybSAxICovfVxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9jaGVja291dFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz17dGhpcy5zdGF0ZVsxXX0+RW50ZXIgWW91ciBQZXJzb25hbCBJbmZvPC9oMz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsxXX0vPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzFdfSBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG5kb2UxMTNAZXhhbXBsZS5jb21cIiAvPiAgXHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gZm9yPVwicGFzc1wiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMV19Lz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gaWQ9XCJwYXNzXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3NcIiBwbGFjZWhvbGRlcj1cImRvIG5vdCB1c2UgMTIzXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsxXX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImZvcm0xXCIgY2xhc3M9e3RoaXMuc3RhdGVbMV19IG9uQ2xpY2s9e3RoaXMucmVyZW5kZXJ9IHZhbHVlPVwiTmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICB7LyogZm9ybSAyICovfVxyXG4gICAgICAgICAgPGgzIGNsYXNzPXt0aGlzLnN0YXRlWzJdfT5TZWxlY3QgWW91ciBTaGlwcGluZyBEaXN0aW5hdGlvbjwvaDM+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cImFkZHJlc3MxXCI+QWRkcmVzczE6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19IC8+IFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBmb3I9XCJhZGRyZXNzMlwiPkFkZHJlc3MyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSAvPiAgXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9e3RoaXMuc3RhdGVbMl19IGZvcj1cImNpdHlcIj5DaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19Lz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbMl19IC8+ICBcclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gZm9yPVwic3RhdGVcIj5TdGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9e3RoaXMuc3RhdGVbMl19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBmb3I9XCJ6aXBDb2RlXCI+WmlwIGNvZGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBDb2RlXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0gLz4gIFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBmb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzJdfS8+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9e3RoaXMuc3RhdGVbMl19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgLz5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVsyXX0vPiAgXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJmb3JtMlwiIGNsYXNzPXt0aGlzLnN0YXRlWzJdfSBvbkNsaWNrPXt0aGlzLnJlcmVuZGVyfSB2YWx1ZT1cIk5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgey8qIGZvcm0gMyAqL31cclxuICAgICAgICAgIDxoMyBjbGFzcz17dGhpcy5zdGF0ZVszXX0+U2VsZWN0IFlvdXIgU2hpcHBpbmcgRGlzdGluYXRpb248L2gzPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSBmb3I9XCJjcmVkaXROdW1cIj5DcmVkaXQgY2FyZDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzNdfS8+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9e3RoaXMuc3RhdGVbM119IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdE51bVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119IC8+IFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSBmb3I9XCJleHBEYXRlXCI+RXhwZXJhdGlvbiBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119Lz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz17dGhpcy5zdGF0ZVszXX0gdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwRGF0ZVwiIC8+XHJcbiAgICAgICAgICA8YnIgY2xhc3M9e3RoaXMuc3RhdGVbM119IC8+IFxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSBmb3I9XCJ6aXBcIj5aaXA6PC9sYWJlbD5cclxuICAgICAgICAgIDxiciBjbGFzcz17dGhpcy5zdGF0ZVszXX0vPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiAvPlxyXG4gICAgICAgICAgPGJyIGNsYXNzPXt0aGlzLnN0YXRlWzNdfSAvPiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImZvcm0zXCIgY2xhc3M9e3RoaXMuc3RhdGVbM119IG9uQ2xpY2s9e3RoaXMuc3VibWl0fSB2YWx1ZT1cIkNvbXBsZXRlIFB1cmNoYXNlXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInJlc3VsdHMyXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==