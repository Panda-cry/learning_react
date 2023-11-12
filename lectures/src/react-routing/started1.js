import { Link, Route, Routes } from "react-router-dom";

function Start1() {
  return (
    <div>
      {" "}
      Routed{" "}
      <ul>
        <li>
          {" "}
          <Link to="/detailed/Detailed1">Detailed 1</Link>
        </li>
        <li>
          {" "}
          <Link to="/detailed/Detailed2"> Detailed 2</Link>
        </li>
        <li>
          {" "}
          <Link to="/detailed/Detailed3">Detailed 3</Link>
        </li>
      </ul>{" "}
      <Routes>
        <Route path="/start1/blbla" element={<p>HAhahahah</p>}></Route>
      </Routes>
    </div>
  );
}

export default Start1;

//ime pages pa onda opises sta koja radi i sta koristu jer je citiljivije
//Kada korisitmo Link hook onda je SPA nije SPA ako se radi refresh i menja stanje app
//Mozemo nesto da izgubimo i tjt
//Navigacije su te koje nas muce
//navlink ako hocemo da nam podeblja gde se nalazimo
//na snimku mozemo da imamo nested routes i da se pojavljuje nesto ako se ona pozove
//tj renderuje se cela komponenta ali nesto dok se sada radi sa updated version
//nece da funkcionira :D
//Mozemo da iskoristimo redirec ako unesemo neku nepoznatu rutu stavimo redirect negde :D
