import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Transactions from './pages/Transactions';
import Report from './pages/Report';
import Calendar from './pages/Calendar';
import Todo from './pages/Todo';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AddCategory from './pages/AddCategory';
import AddTransaction from './pages/AddTransaction';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/report" element={<Report />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/transactions/add" element={<AddTransaction />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
