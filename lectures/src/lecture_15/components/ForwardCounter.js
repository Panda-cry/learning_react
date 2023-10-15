import useCounter from "../hooks/use-counter";

function ForwardCounter() {
  const counter = useCounter();

  return <section>{counter}</section>;
}

export default ForwardCounter;
