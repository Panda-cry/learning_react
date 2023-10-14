function Movie(props) {
  return (
    <li key={props.id}>
      <p>{props.name}</p>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </li>
  );
}

export default Movie;
