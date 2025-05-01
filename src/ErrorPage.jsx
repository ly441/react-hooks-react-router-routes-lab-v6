import React from "react";
import NavBar from "../components/NavBar.jsx";


function ErrorPage() {
  return (
    <div>
      <NavBar />
      <h1>Oops! Looks like something went wrong.</h1>
      <p>we could not find the page you are looking for.</p>
    </div>
  );
}
export default ErrorPage;
