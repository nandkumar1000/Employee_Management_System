import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authData = useContext(AuthContext);

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
      alert("Authentication data is loading. Try again in a moment.");
      return;
    }

    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { email: 'admin@me.com', role: 'admin' };
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      setUserRole('admin');
      setLoggedInUser(adminUser);
      return;
    }

    const employee = authData.employees.find(e => e.email === email && e.password === password);
    if (employee) {
      const employeeUser = { ...employee, role: 'employees' };
      localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      setUserRole('employees');
      setLoggedInUser(employeeUser);
      return;
    }

    alert("Invalid email or password.");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserRole(null);
    setLoggedInUser(null);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 text-xl text-blue-600 font-semibold">
        Loading authentication data...
      </div>
    );
  }

  if (!userRole) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      {userRole === 'admin' && <AdminDashboard onLogout={handleLogout} />}
      {userRole === 'employees' && loggedInUser && (
        <EmployeeDashboard data={loggedInUser} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
