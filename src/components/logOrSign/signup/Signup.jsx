 import { useState } from "react";

import { signupFetch } from "../../../utils/fetch";

import "./Signup.css";

// eslint-disable-next-line react/prop-types
const Signup = ({ setLoggedUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const testSign = (username, email, password) => {
    console.log("test is working");
    console.log(username, email, password);
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
    const data = await signupFetch(username, email, password);
    
 
    if (data.message === "success") {
     // setLoggedUser
     setLoggedUser(data);
     // setIsLoggedIn
     setIsLoggedIn(true);
  }
};

  return (
    <div className="flex flex-column signup">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-column signup-form"
      >
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="email"
            placeholder="Email..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
