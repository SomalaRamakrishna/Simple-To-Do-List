import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
