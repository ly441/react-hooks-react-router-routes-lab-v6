
import App from "./App";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // this should wrap everything
    children: [
      { path: "", element: <Home /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
    ],
  },
]);
export default router;