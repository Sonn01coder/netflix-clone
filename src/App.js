import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/page/Home';
import SearchMovie from './components/searchMovie/SearchMovie';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/page/Search';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/search' element={<Search />} />
          </Routes>
          <Footer />
      </BrowserRouter>
     {/* <SearchMovie/> */}
    </div>
  );
}

export default App;
 