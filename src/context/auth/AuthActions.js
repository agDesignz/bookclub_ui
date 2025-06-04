import supabase from "../../supabaseClient";

const getUserData = (accessToken) => {
  try {
    const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));
    console.log("token:", decodedToken);
    return decodedToken;
  } catch (error) {
    return `Error with the user session: ${error.message}`;
  }
};

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
    return "Registration successful! Look for an email", data;
  }
};

// Log in
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

// Log out
const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  return;
};

const fetchSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
    return;
  } else if (session) {
    // console.log(session.access_token);
    const userData = getUserData(session.access_token);
    // console.log("userData:", userData);
    return userData;
  } else {
    console.log("No active session found.");
  }
};

export { getUserData, signUpUser, signInUser, signOutUser, fetchSession };
