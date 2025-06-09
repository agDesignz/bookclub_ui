import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import {
  fetchSessionData,
  signUpUser,
  signInUser,
  decodeToken,
  signOutUser,
} from "./AuthActions";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // core Supabase user
  const [userData, setUserData] = useState(null); // custom claims

  const loadSessionData = async () => {
    const { sessionUser, sessionData } = await fetchSessionData();
    if (sessionUser) {
      setUser(sessionUser);
    }
    if (sessionData) {
      setUserData(sessionData);
    }
  };

  const registerUser = async (email, password, username) => {
    const result = await signUpUser(email, password, username);
    if (result) await loadSessionData();
  };

  const logInUser = async (email, password) => {
    const result = await signInUser(email, password);
    if (result) await loadSessionData();
  };

  const logOut = async () => {
    const success = await signOutUser();
    if (success) {
      setUser(null);
      setUserData(null);
    }
  };

  useEffect(() => {
    loadSessionData();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (_event === "SIGNED_OUT") {
          console.log("AUTH STATE: SIGNED OUT");
          setUser(null);
          setUserData(null);
        } else if (session) {
          console.log("SESSION DETECTED -- ", session);
          setUser(session.user);
          setUserData(decodeToken(session.access_token));
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, userData, registerUser, logInUser, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
