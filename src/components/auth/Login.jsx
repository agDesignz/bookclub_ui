import { useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [alertMsg, setAlertMsg] = useState("");

  const { logInUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    const loggedIn = await logInUser(loginData.email, loginData.password);
    console.log(loggedIn);
    navigate("/");
    // const result = await handleUserApi("POST", "/api/user/login", loginData);
    // setLoginData({});
    // !result.ok && setAlertMsg("Invalid username or password.");
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={submitLogin}>
      <label hidden htmlFor="email">
        email
      </label>
      <input
        type="email"
        name="email"
        value={loginData?.email || ""}
        placeholder="Email"
        className="form__input"
        onChange={handleLoginChange}
      />
      <label hidden htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={loginData?.password || ""}
        placeholder="Enter Password"
        className="form__input"
        onChange={handleLoginChange}
      />
      <button
        className="btn btn-wide btn-success btn-soft rounded-full"
        type="submit"
      >
        Log In
      </button>
      {/* <Alert content={alertMsg} /> */}
    </form>
  );
};
export default Login;
