import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import {
  getUserData,
  signUpUser,
  signInUser,
  signOutUser,
  fetchSession,
} from "./AuthActions";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async (email, password, username) => {
    const newUserData = await signUpUser(email, password, username);
    console.log(getUserData(newUserData.session.access_token));
    newUserData && (await setUserData());
  };

  const logInUser = async (email, password) => {
    const loginData = await signInUser(email, password);
    loginData && setUserData();
  };

  // Log out
  const logOut = async () => {
    const logOutAttempt = await signOutUser();
    !logOutAttempt && setUser(null);
  };

  const setUserData = async () => {
    const currentUser = await fetchSession();
    console.log("currentUser:", currentUser);
    if (currentUser) {
      setUser(currentUser);
      console.log("New User Set:", user);
    } else {
      setUser(null);
    }
  };

  // Tracking session

  useEffect(() => {
    setUserData();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        session && setUser(getUserData(session.access_token));
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, registerUser, logInUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
