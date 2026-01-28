import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <Link to="/ex1">Exercise 1</Link> |{" "}
      <Link to="/ex2">Exercise 2</Link> |{" "}
      <Link to="/ex3">Exercise 3</Link> |{" "}
      <Link to="/ex4">Exercise 4</Link>
    </nav>
  );
}

export default NavBar;
