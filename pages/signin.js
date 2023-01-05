import styles from "../styles/Home.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Link from "next/link";

export default function SignIn({ rows }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var flag = 0;
    try {
      const ph = formData["phone"];
      const pwd = formData["password"];

      rows.forEach((row) => {
        if (row.phone === ph) {
          if (pwd === row.password) {
            flag = 1;
            alert("Sign in success");
            Router.push("/addcycle");
          }
        }
      });
      if (flag === 0) {
        alert("Wrong phone or password, try again!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
      <h1 style={{ fontSize: "24px" }}>Sign In</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: "100%", marginTop: "10px" }}
            />
          </label>
          <br />
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", marginTop: "10px" }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/users");
  const rows = res.data;

  return {
    props: {
      rows,
    },
  };
};
