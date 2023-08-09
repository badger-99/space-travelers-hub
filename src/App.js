import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './pages/Missions';
import Footer from './components/Footer';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/my_profile" element={<MyProfile />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
    <Footer />
  </>
);

export default App;
