import styles from "../styles/Home.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

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
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Sign In</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
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
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Sign In
        </button>
      </form>
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
