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
import ProtectedRoute from "./components/ProtectedRoute";
import FAQ from "./components/FAQ";
import Delivery from "./components/Delivery";
import About from "./components/About";
import ProductInfo from "./components/ProductInfo";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "toastr/build/toastr.min.css";
import PowerTools from "./components/CatalogFilters/PowerTools";
import Tools from "./components/CatalogFilters/Tools";
import Santehnika from "./components/CatalogFilters/Santehnika";
import Materials from "./components/CatalogFilters/Materials";

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
          path="/catalog/tools"
          element={
            <>
              <Navbar />
              <Tools />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog/power_tools"
          element={
            <>
              <Navbar />
              <PowerTools />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog/materials"
          element={
            <>
              <Navbar />
              <Materials />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog/plumbing"
          element={
            <>
              <Navbar />
              <Santehnika />
              <Footer />
            </>
          }
        />
        <Route
          path="/DeliveryAndPayment"
          element={
            <>
              {" "}
              <Navbar />
              <Delivery />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              {" "}
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/FAQ"
          element={
            <>
              {" "}
              <Navbar />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route
          path="/Product"
          element={
            <>
              {" "}
              <Navbar />
              <ProductInfo />
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
      </Routes>
    </Router>
  );
}

export default App;
