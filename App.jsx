import { Outlet } from "react-router-dom";
import NavBar from ".src/components/NavBar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
