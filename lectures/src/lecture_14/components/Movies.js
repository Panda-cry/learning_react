import React from "react";
import MovieList from "./MovieList";

function Movies(props) {
  return (
    <React.Fragment>
      <MovieList items={props.items}></MovieList>
    </React.Fragment>
  );
}
{
  /*
komunikacija sa neki backend servisom moze da se odradi preko fetch 
a moze i preko nekog eksternog library
validacija neke loading screen sve moze da se odradi laganoi sa ispitivanjem da li je api zvao 
useState sluzi da se pozivaju ovakve stvari jer je to side effect, a takodje kao dependecy treba taj neki handler da se savi
pa da ne bi kreirao i pozivao stalno jer je fja tj objekat u react moramo tu fj da wrap-ujemo u useCallback da kreira u memoriji
samo jednu :D




*/
}
export default Movies;
