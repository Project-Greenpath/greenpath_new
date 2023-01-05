import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";

export default function SignUp() {
  function sign_up() {
    const data = {
      id: 12,
      collegeid: "TVE19CS049",
      full_name: "AJjjj",
      department: "cse",
      yog: "2022",
      phone: "9876543210",
      password: "1234",
    };

    axios
      .post("/api/users", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users", formData);
      if (data.success) {
        alert("Sign up success");
        Router.push("/signin");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const signupStyle = {
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    minHeight: "100vh",
    backgroundImage: "url('/images/forest-cycle.jpg')",
  };

  const formStyle = {
    margin: "6rem",
    minHeight: "80vh",
    alignItems: "center",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    backgroundColor: "#d6d6d698",
    padding: "3rem",
    paddingTop: "6rem",
    boxShadow: "#4b514bce 4px 4px 20px",
    borderRadius: "1rem",
    border: "1px solid #ffffff93",
    backdropFilter: "blur(20px) saturate(125%)",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px",
  };

  return (
    <div style={signupStyle}>
      <nav>
        <div className="logo">
          <Link href="/">
            <img
              src="/images/greenpath-logo-long.svg"
              alt=""
              className="logo-img"
            />
          </Link>
        </div>
        <div className="nav-menu">
          <ul className="nav-links">
            <Link href="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link href="/signup">
              <li className="nav-item cta-secondary">Sign Up</li>
            </Link>
            <Link href="/signin">
              <li className="nav-item cta-sec">Log In</li>
            </Link>
          </ul>
        </div>
      </nav>
      <form style={formStyle} onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="id">ID:</label>
        <input type="text" name="id" onChange={handleChange} required />
        <br />
        <label htmlFor="collegeid">College ID:</label>
        <input type="text" name="collegeid" onChange={handleChange} required />
        <br />
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" name="full_name" onChange={handleChange} required />
        <br />
        <label htmlFor="department">Department:</label>
        <input type="text" name="department" onChange={handleChange} required />
        <br />
        <label htmlFor="yog">Year of Graduation:</label>
        <input type="text" name="yog" onChange={handleChange} required />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" onChange={handleChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <br />
        <button style={buttonStyle} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
