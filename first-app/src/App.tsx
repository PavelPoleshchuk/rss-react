import Layout from 'components/Layout/Layout';
import AboutUs from 'pages/aboutUs/AboutUs';
import FormPage from 'pages/formPage/FormPage';
import HomePage from 'pages/homePage/HomePage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
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
          <Route path="forms" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
