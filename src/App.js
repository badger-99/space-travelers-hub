import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Placeholder from './components/placeholder';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/placeholder" element={<Placeholder />} />
      <Route path="/my_profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
