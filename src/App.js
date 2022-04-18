import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JokeList from './pages/JokeList';
import TNavbar from './components/Navbar';
import RandomJokes from './pages/RandomJokes';
import JokeDetail from './pages/JokeDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TNavbar />
        <Routes>
          <Route index element={<JokeList />} />
          <Route path="/ramdom-joke" element={<RandomJokes />} />
          <Route path="/joke/:id" element={<JokeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
