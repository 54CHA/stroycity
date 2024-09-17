import './App.css'
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
        <> <Navbar/>
        <MainPage/>
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
