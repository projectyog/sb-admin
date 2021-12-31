import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductHome from '../src/components/product/ProductHome';
import UserHome from '../src/components/user/UserHome';
import Dashboard from '../src/components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/users' element={<UserHome />} />
      <Route path='/Products' element={<ProductHome/>} />
      </Routes>
    </Router>
  );
}

export default App;