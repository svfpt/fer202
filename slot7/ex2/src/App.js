import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/ex1" element={<Exercise1 />} />
        <Route path="/ex2" element={<Exercise2 />} />
        <Route path="/ex3" element={<Exercise3 />} />
        <Route path="/ex4" element={<Exercise4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
