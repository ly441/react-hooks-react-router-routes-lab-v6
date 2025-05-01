
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Directors from "./pages/Directors.jsx";
import Actors from "./pages/Actors.jsx";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import App from "../App.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
]);

export default routes;
