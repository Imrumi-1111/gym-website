import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/section/about/about';
import Training from './components/section/training/training';
import Registration from './components/element/registration/registration';
import Pricing from './components/section/pricing/pricing';
import Program from './components/section/program/program';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Program />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/registration" element={<Registration/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
