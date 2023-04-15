import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import AddMovies from "./components/addMovies/AddMovies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovies />} />
      </Routes>
    </div>
  );
}

export default App;
