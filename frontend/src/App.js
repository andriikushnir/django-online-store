import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Catalogs from './components/Catalogs';
import MainPage from './pages/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
