import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Chart from '../Chart/Chart';
import Category from '../Category/Category';
import StudentSelector from '../StudentSelector/StudentSelector';
import Profile from '../Profile/Profile';

import './App.css';

const App = () => {
  const [category, setCategory] = useState('allebei');
  const [profile, setProfile] = useState();

  return (
    <BrowserRouter>
      <h1>Student Dashboard</h1>
      <StudentSelector setProfile={setProfile} />
      <Category category={category} setCategory={setCategory} />
      <Profile profile={profile} />
      <Routes>
        <Route path="/" element={<Chart hide={category} />} />
        <Route path="/:id" element={<Chart hide={category} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
