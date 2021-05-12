let count = 0;
const addOne = () => {
  ++count;
  renderCounterApp();
};

const removeOne = () => {
  --count;
  renderCounterApp();
};

const removeAll = () => {
  count = 0;
  renderCounterApp();
};

ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={removeOne}>-1</button>
      <button onClick={addOne}>+1</button>
      <button onClick={removeAll}>Delete All</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
