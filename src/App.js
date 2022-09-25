import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';

function App() {
  return (

 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
   

  );
}

export default App;
