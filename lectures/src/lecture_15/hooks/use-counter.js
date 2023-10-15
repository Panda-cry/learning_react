import { useEffect, useState } from "react";

function useCounter(flag = true) {
  const [counter, setCounter] = useState(0);

  useEffect(
    function () {
      const interval = setInterval(function () {
        if (flag) {
          setCounter((oldState) => oldState + 1);
        } else {
          setCounter((oldState) => oldState - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    },
    [flag]
  );
  return counter;
}

export default useCounter;
