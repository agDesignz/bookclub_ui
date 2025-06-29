import { useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const [signupData, setSignupData] = useState({});
  const [alertMsg, setAlertMsg] = useState("");
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const submitSignup = async (e) => {
    e.preventDefault();

    const { password, confirmPassword, email, username } = signupData;
    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      return;
    } else {
      console.log(signupData);

      const result = await registerUser(email, password, username);
      console.log(result);
    }
    setSignupData({});
    navigate("/");
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={submitSignup}
      >
        <h2>Register</h2>
        <label hidden htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={signupData?.email || ""}
          placeholder="Email"
          className="form__input"
          onChange={handleSignupChange}
        />
        <label hidden htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={signupData?.username || ""}
          placeholder="Username"
          className="form__input"
          onChange={handleSignupChange}
        />
        <label hidden htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={signupData?.password || ""}
          placeholder="Enter Password"
          className="form__input"
          onChange={handleSignupChange}
        />
        <label hidden htmlFor="confirmPassword">
          Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={signupData?.confirmPassword || ""}
          placeholder="Confirm Password"
          className="form__input"
          onChange={handleSignupChange}
        />
        {/* <AltchaWidget onVerify={handleAltchaVerify} /> */}
        <button
          className="btn btn-wide btn-success btn-soft rounded-full"
          type="submit"
          //   disabled={!isVerified}
        >
          Create Account
        </button>
        {/* <Alert content={alertMsg} /> */}
      </form>
    </>
  );
};
export default Register;
