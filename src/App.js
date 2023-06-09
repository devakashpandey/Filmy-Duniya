import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import AddMovies from "./components/addMovies/AddMovies";
import DetailPage from "./components/detailPage/DetailPage";
import { StateProvider } from "./context/Context";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <StateProvider>
      <div className="App relative ">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovies />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </StateProvider>
  );
}

export default App;
