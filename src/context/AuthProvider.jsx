import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("initialized")) {
      setLocalStorage();
      localStorage.setItem("initialized", "true");
    }

    const data = getLocalStorage();
    // console.log("Data retrieved in AuthProvider's useEffect:", data);
    setUserData(data);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
