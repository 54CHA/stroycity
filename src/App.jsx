import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import PopularCategories from "./components/PopularCategories";
import Sales from "./components/Sales";
import Catalog from "./components/Catalog";
import User from "./components/User";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import SignInPageSeller from "./components/SignInPageSeller";
import SignUpSeller from "./components/SignUpSeller";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CreateProduct from "./components/CreateProduct";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

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
        <Route element={<ProtectedRoute />}>
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
        </Route>

        <Route
          path="/SignIn"
          element={
            <>
              <SignInPage />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUpPage />
            </>
          }
        />
        <Route
          path="/SignInSeller"
          element={
            <>
              <SignInPageSeller />
            </>
          }
        />
        <Route
          path="/SignUpSeller"
          element={
            <>
              <SignUpSeller />
            </>
          }
        />
        <Route
          path="/Admin"
          element={
            <>
              <Navbar />
              <Admin />
              <Footer />
            </>
          }
        />
        <Route
          path="/CreateProduct"
          element={
            <>
              <Navbar />
              <CreateProduct />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
