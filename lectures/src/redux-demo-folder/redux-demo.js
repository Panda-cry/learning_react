const redux = require("redux");

function reduxCounterFunction(state = { counter: 0 }, action) {
  if (action.type === "ADD")
    return {
      counter: state.counter + 1,
    };

  return state;
}

const store = redux.createStore(reduxCounterFunction);

function counterSubscriber() {
  let latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({ type: "ADD" });
