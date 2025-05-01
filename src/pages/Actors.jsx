
import NavBar from "../components/NavBar";

function Actors({ actors }) {
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((a, i) => (
        <article key={i}>
          <h2>{a.name}</h2>
          <ul>
            {a.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
export default Actors;
