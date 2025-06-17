import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'; // Import setLocalStorage here

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Ensure localStorage is initialized before attempting to get data.
    // This addresses the timing issue where AuthProvider might try to read
    // data before App.jsx's useEffect has populated localStorage.
    if (!localStorage.getItem("initialized")) {
      setLocalStorage(); // Call setLocalStorage here to populate initial data
      localStorage.setItem("initialized", "true");
    }

    const data = getLocalStorage();
    console.log("Data retrieved in AuthProvider's useEffect:", data); // For debugging
    setUserData(data);
  }, []); // Run only once on mount

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
