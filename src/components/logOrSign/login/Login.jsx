import { useState } from "react";

import "./Login.css";
import { loginFetch } from "../../../utils/fetch";

// eslint-disable-next-line react/prop-types
const Login = ({ setLoggedUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const testLogin = (username, password) => {
    console.log("test is working");
    console.log(username, password);
    return {
      message: "success",
      user: {
        id: 1,
        username: "michael",
      },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // loginFetch goes here and replaces testLogin
    const data = await loginFetch(username, password);
  
    if (data.message === "success"){
      console.log("!!!!!")
  // setLoggedUser
  setLoggedUser(data);
  // setIsLoggedIn
  setIsLoggedIn(true);
    }
  
  };

  return (
    <div className="flex flex-column login">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-column login-form"
      >
        <h3>Login</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
