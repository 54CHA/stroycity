import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import PopularCategories from "./components/PopularCategories";
import Sales from "./components/Sales";
import Catalog from "./components/Catalog";
import User from "./components/User";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <MainPage />
              <PopularCategories />
              <Sales />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog"
          element={
            <>
              <Navbar />
              <Catalog />
              <Footer />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              <Navbar />
              <User />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
