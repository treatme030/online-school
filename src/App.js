import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import CourseDetailPage from './pages/CourseDetailPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/course-detail' element={<CourseDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
