import './App.css'
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import PopularCategories from './components/PopularCategories';
import Sales from './components/Sales';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
        <> <Navbar/>
        <MainPage/>
        <PopularCategories/>
        <Sales/>
        <Footer/>
        </>
        }/>
      <Route path="/user" element={ <>
        <Navbar/>
        <MainPage/>
        </>
      }/>
      </Routes>
    </Router>
  )
}

export default App
