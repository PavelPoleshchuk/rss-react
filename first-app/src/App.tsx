import Layout from 'components/Layout';
import AboutUs from 'pages/AboutUs';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
