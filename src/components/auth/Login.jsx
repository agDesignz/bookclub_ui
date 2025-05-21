import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [alertMsg, setAlertMsg] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    // const result = await handleUserApi("POST", "/api/user/login", loginData);
    // setLoginData({});
    // !result.ok && setAlertMsg("Invalid username or password.");
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={submitLogin}>
      <label hidden htmlFor="username">
        Username
      </label>
      <input
        type="text"
        name="username"
        value={loginData?.username || ""}
        placeholder="Username"
        className="auth-form__input"
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
        className="auth-form__input"
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
