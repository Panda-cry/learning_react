import { useState } from "react";

function useHttp(requestConfig, applyData) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const sendRequest = async function () {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        /*Moramo ovako jer fetch ne baca errore :D */
        throw new Error("Request failed");
      }
      const data = await response.json();
      applyData(data);
    } catch (exception) {
      setError(exception || "Something went wrong");
    }
    setLoading(false);
  };
  /*
 Ovde treba da se pazi mozemo vratiti bilo sta sa custom hook moze da bude fj ili tako ali mora da se pazi za dependency 
 ako se zavisi od necega da se ne upadne u infinite loop takodje mora da se pazi gde se stavlja da ne bi se komponenta stalno kreirala
 useCallback je pomoc ovde
 Sva moguca logika da se napravi kao neki manji interface i smanji ponavljanje koda onda je custom hook prava opcija
 Napomena treba proveriti kako da fja ne bude dependency jer je moguce napraviti da fje ne zavise jedna od druge i ako moze da se ukapira jos malo
 ti dependecy stvari :D
 
 */
  return {
    isLoading: loading,
    error: error,
    sendRequest: sendRequest,
  };
}

export default useHttp;
