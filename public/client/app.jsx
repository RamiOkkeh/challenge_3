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
      success: (reply) => { console.log('data: ', reply); $('#results').html(`<pre>${reply}</pre>`); this.get(); },
      error: (err) => console.log('err: ', err)
    });
  }
  get() {
    $.ajax({
      url: 'http://127.0.0.1:3002/checkout',
      method: 'GET',
      success: (reply) => {
        console.log('data: ', reply);
        var str = '';
        for (let i = 0; i < reply.length; i++) {
          const elem = reply[i];
          for (var key in elem) {
            str += key + ': ';
            str += elem[key] + '\n';
          }
        }
        $('#results2').html(`<pre>${str}</pre>`);
      },
      error: (err) => console.log('err: ', err)
    });
  }
  render() {
    //   var that = this;
    return (
      <div id="main">
        <button name="checkout" class={this.state[0]} onClick={this.rerender}>Checkout</button>
            

        {/* form 1 */}
        <form action="/checkout" method="post">
          <h3 class={this.state[1]}>Enter Your Personal Info</h3>
          <label class={this.state[1]} for="name">Name:</label>
          <br class={this.state[1]}/>
          <textarea class={this.state[1]} type="text" name="name" placeholder="John Doe" />
          <br class={this.state[1]}/>  
          <label class={this.state[1]} for="email">Email:</label>
          <br class={this.state[1]}/>
          <textarea class={this.state[1]} type="text" name="email" placeholder="johndoe113@example.com" />  
          <br class={this.state[1]}/>
          <label class={this.state[1]} for="pass">Password:</label>
          <br class={this.state[1]}/>
          <input class={this.state[1]} id="pass" type="password" name="pass" placeholder="do not use 123" />
          <br class={this.state[1]} />
          <input type="button" name="form1" class={this.state[1]} onClick={this.rerender} value="Next" />
                

          {/* form 2 */}
          <h3 class={this.state[2]}>Select Your Shipping Distination</h3>
          <label class={this.state[2]} for="address1">Address1:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="address1" />
          <br class={this.state[2]} /> 
          <label class={this.state[2]} for="address2">Address2:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="address2" />
          <br class={this.state[2]} />  
          <label class={this.state[2]} for="city">City:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="city" />
          <br class={this.state[2]} />  
          <label class={this.state[2]} for="state">State:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="state" />
          <br class={this.state[2]} />  
          <label class={this.state[2]} for="zipCode">Zip code:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="zipCode" />
          <br class={this.state[2]} />  
          <label class={this.state[2]} for="phone">Phone Number:</label>
          <br class={this.state[2]}/>
          <textarea class={this.state[2]} type="text" name="phone" />
          <br class={this.state[2]}/>  
          <input type="button" name="form2" class={this.state[2]} onClick={this.rerender} value="Next" />
                

          {/* form 3 */}
          <h3 class={this.state[3]}>Select Your Shipping Distination</h3>
          <label class={this.state[3]} for="creditNum">Credit card:</label>
          <br class={this.state[3]}/>
          <textarea class={this.state[3]} type="text" name="creditNum" />
          <br class={this.state[3]} /> 
          <label class={this.state[3]} for="expDate">Experation Date:</label>
          <br class={this.state[3]}/>
          <textarea class={this.state[3]} type="text" name="expDate" />
          <br class={this.state[3]} /> 
          <label class={this.state[3]} for="zip">Zip:</label>
          <br class={this.state[3]}/>
          <textarea class={this.state[3]} type="text" name="zip" />
          <br class={this.state[3]} /> 
          <input type="submit" name="form3" class={this.state[3]} onClick={this.submit} value="Complete Purchase" />
        </form>
            
        <div id="results"></div>
        <div id="results2"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));