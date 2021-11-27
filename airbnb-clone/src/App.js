import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/search" element={<SearchPage/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
