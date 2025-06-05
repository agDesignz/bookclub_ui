import supabase from "../../supabaseClient";

// Unchanged
const signUpUser = async (email, password, username) => {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (signUpError) {
    console.error("Unable to register user:", signUpError);
    return signUpError;
  } else {
    console.log("Registration successful! Look for an email");
    return data; // ✅ FIXED: now returns the actual data object
  }
};

// Unchanged
const signInUser = async (email, password) => {
  const { data, error: logInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (logInError) {
    console.error("Error signing in:", logInError);
    return;
  } else {
    console.log("Logged in! WooHoo!");
    return data;
  }
};

// Unchanged
const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
    return false;
  }
  return true;
};

const decodeToken = (accessToken) => {
  try {
    const decoded = JSON.parse(atob(accessToken.split(".")[1]));
    return decoded;
  } catch (error) {
    return `Error with the user session: ${error.message}`;
  }
};

// ✅ New function: fetch and split sessionUser + custom sessionData
const fetchSessionData = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    return { sessionUser: null, sessionData: null };
  }

  const sessionUser = session.user;

  try {
    // const decoded = JSON.parse(atob(session.access_token.split(".")[1]));
    const decoded = decodeToken(session.access_token);
    const sessionData = decoded || null;
    return { sessionUser, sessionData };
  } catch (e) {
    console.error("Error decoding JWT:", e);
    return { sessionUser, sessionData: null };
  }
};

export { signUpUser, signInUser, signOutUser, decodeToken, fetchSessionData };
