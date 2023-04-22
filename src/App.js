import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import AddMovies from "./components/addMovies/AddMovies";
import DetailPage from "./components/detailPage/DetailPage";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovies />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
