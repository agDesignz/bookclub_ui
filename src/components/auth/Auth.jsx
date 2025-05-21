import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);

  const switchUserStatus = () => {
    setNewUser(!newUser);
  };
  return (
    <div className="grow flex flex-col justify-center items-center h-full gap-10">
      <div className="grow flex flex-col justify-center items-center">
        {newUser ? <Register /> : <Login />}
      </div>
      <button className="mb-16 font-light" onClick={switchUserStatus}>
        {newUser ? "Already a user? Log in here." : "Register to join."}
      </button>
    </div>
  );
};
export default Auth;
