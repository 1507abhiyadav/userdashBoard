import axios from "axios";
import React, { useState } from "react";
import "./homepage.css";

// const Homepage = ({ setLoginUser }) => {
const Homepage = () => {
  const [user, setUser] = useState([
    // projectName: "",
    // companyName: "",
    // queryName: "",
    // uploadDocument: "",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const home = () => {
    const data = new FormData();
    console.log(user);
    data.append("user", user);
    axios
      .post("http://localhost:5000/upload", data)
      .then((res) => {
        console.log("Success");
        alert("success");
      })
      .catch((err) => console.error("error", err));
  };

  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <input
        type="text"
        name="projectName"
        value={user.projectName}
        placeholder="Your projectName"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="companyName"
        value={user.companyName}
        placeholder="Your companyName"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="queryName"
        value={user.queryName}
        placeholder="Your queryName"
        onChange={handleChange}
      ></input>
      <input
        type="file"
        name="uploaddocument"
        value={user.uploadDocument}
        placeholder="Your uploaddocument"
        //   onChange={handleChange}
        onChange={(event) => setUser(event.target.files)}
      ></input>
      <div className="button" onClick={home}>
        submit
      </div>
    </div>
  );
};

export default Homepage;
