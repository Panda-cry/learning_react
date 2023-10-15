import useCounter from "../hooks/use-counter";

function BackwardCounter() {
  const counter = useCounter(false);

  return <section>-{counter}</section>;
}

export default BackwardCounter;
