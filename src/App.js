import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Everything from './components/Everything';
import Home from './components/Home';
import Footer from './components/Footer';
import { ProductProvider } from './context/ProductContext'; 
import './App.css';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/Home" element={<Body />} />
              <Route path="/Everything" element={<Everything />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
