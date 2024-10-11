
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Products from './Pages/Products';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Contacts' element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
