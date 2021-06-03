class Counter extends React.Component {
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    console.log(this.state.count)
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
    console.log(this.state.count)
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
    })
    console.log(this.state.count)
  }

  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}


ReactDOM.render(<Counter/>, document.getElementById('app'))



// let count = 0;
// const addOne = () => {
//   ++count;
//   renderCounterApp();
// };

// const removeOne = () => {
//   --count;
//   renderCounterApp();
// };

// const removeAll = () => {
//   count = 0;
//   renderCounterApp();
// };

// ReactDOM.render(template, appRoot);

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={removeOne}>-1</button>
//       <button onClick={addOne}>+1</button>
//       <button onClick={removeAll}>Delete All</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
