import React from 'react';
import './App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Section from '../components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
