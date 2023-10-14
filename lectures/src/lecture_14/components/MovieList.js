import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  const list = props.items.map((item) => (
    <Movie
      id={item.episode_id}
      title={item.title}
      description={item.opening_crawl}
      name={item.director}
    ></Movie>
  ));
  return (
    <React.Fragment>
      <ul>{list}</ul>
    </React.Fragment>
  );
}

export default MovieList;
