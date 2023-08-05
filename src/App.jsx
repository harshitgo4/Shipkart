import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import "./styles/headers.scss";
import "./styles/home.scss";
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/contact';
import Service from './components/service';
function App() {
  return (
    <>
     
      <Router>
      <Header />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          </Routes>
          <Footer/>
            </Router>
    </>
  );
}

export default App;
