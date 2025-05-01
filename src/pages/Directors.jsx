import React from "react";
import NavBar from "../components/NavBar.jsx";

function Directors({ directors }) {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((d, i) => (
        <article key={i}>
          <h2>{d.name}</h2>
          <ul>
            {d.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
export default Directors;
