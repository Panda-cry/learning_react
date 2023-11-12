import { useParams } from "react-router";

function Detailed() {
  const params = useParams();

  return <h1>{params.anything}</h1>;
}

export default Detailed;
