import React, { useContext, useState, useEffect } from "react";
import { auth } from "./Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const handleSignup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const handleLogin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleLogout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
