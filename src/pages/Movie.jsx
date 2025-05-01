
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((g, i) => (
        <span key={i}>{g}</span>
      ))}
    </>
  );
}
export default Movie;
