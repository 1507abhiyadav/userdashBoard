import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, phone, companyName } = user;
    if (name && email && password && phone && companyName) {
      axios.post("http://localhost:5000/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      {/* {console.log("User", user)} */}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="phone"
        value={user.phone}
        placeholder="Your phone"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="companyName"
        value={user.companyName}
        placeholder="Your CompanyName"
        onChange={handleChange}
      ></input>

      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
      <div className="button">
        If you have already Account <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
