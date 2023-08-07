import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/rockets/rocketSlice';
import './App.css';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/my_profile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default App;
