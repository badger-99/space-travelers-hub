import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Placeholder from './components/placeholder';
import MyProfile from './components/MyProfile';
import Missions from './pages/Missions';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Placeholder />} />
      <Route path="/my_profile" element={<MyProfile />} />
      <Route path="/missions" element={<Missions />} />

    </Routes>
  </>
);

export default App;
