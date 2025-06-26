// App.jsx
import { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';
import Profile from './pages/Profile';
import Attendance from './pages/Attendance';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Feedback from './pages/Feedback';
import { ToastContainer, toast } from 'react-toastify';
import Notification from './components/Notification';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifyMessage, setNotifyMessage] = useState(null);
  const authData = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser && (authData?.employees?.length > 0 || authData?.admin?.length > 0)) {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.role === 'employees') {
        const employee = authData.employees.find(e => e.email === parsedUser.email);
        if (employee) {
          setUserRole('employees');
          setLoggedInUser(employee);
        } else {
          localStorage.removeItem("loggedInUser");
        }
      } else if (parsedUser.role === 'admin') {
        const admin = authData.admin.find(a => a.email === parsedUser.email);
        if (admin || parsedUser.email === "admin@me.com") {
          setUserRole('admin');
          setLoggedInUser(parsedUser);
        } else {
          localStorage.removeItem("loggedInUser");
        }
      }
    }

    setLoading(false);
  }, [authData]);

  const handleLogin = (email, password) => {
    if (!authData || (!authData.employees?.length && !authData.admin?.length)) {
      toast.warn("Authentication data is loading. Try again shortly.");
      return;
    }

    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { email: 'admin@me.com', role: 'admin' };
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      setUserRole('admin');
      setLoggedInUser(adminUser);
      setNotifyMessage(" Admin login successful!");
      navigate('/admin');
      return;
    }

    const employee = authData.employees.find(e => e.email === email && e.password === password);
    if (employee) {
      const employeeUser = { ...employee, role: 'employees' };
      localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      setUserRole('employees');
      setLoggedInUser(employeeUser);
      setNotifyMessage(`👋 Welcome back, ${employee.firstname || 'Employee'}!`);
      navigate('/dashboard');
      return;
    }

    toast.error(" Invalid email or password.");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserRole(null);
    setLoggedInUser(null);
    setNotifyMessage("👋 You have been logged out.");
    navigate('/');
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 text-xl text-blue-600 font-semibold">
        Loading authentication data...
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Notification message={notifyMessage} />
      <Routes>
        <Route path="/" element={!userRole ? <Login handleLogin={handleLogin} /> : <Navigate to={userRole === 'admin' ? '/admin' : '/dashboard'} />} />
        <Route path="/dashboard" element={<EmployeeDashboard data={loggedInUser} onLogout={handleLogout} />} />
        <Route path="/admin" element={<AdminDashboard data={loggedInUser} onLogout={handleLogout} />} />
        <Route path="/profile" element={<Profile user={loggedInUser} />} />
        <Route path="/attendance" element={<Attendance user={loggedInUser} />} />
        <Route path="/calendar" element={<Calendar user={loggedInUser} />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/feedback" element={<Feedback user={loggedInUser} />} />
        <Route path="*" element={<div className='p-10 text-center text-2xl font-semibold text-red-500'>404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
