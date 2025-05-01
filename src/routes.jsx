
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

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
