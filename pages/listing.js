import "../styles/Home.module.css";
import Card from "../components/card";
import { pool } from "../services/mysql";
import { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

export default function Listing({ rows }) {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gridGap: "16px",
      width: "100%",
      margin: "0 auto",
      padding: "0 16px",
      paddingTop: "6rem",
    },
  };

  useEffect(() => {
    console.log(rows);
  }, []);

  return (
    <div>
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
      <div style={styles.container}>
        {JSON.parse(rows).map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      {/* <div
        className="button"
        style={{
          position: "absolute",
          right: "16px",
          bottom: "16px",
          backgroundColor: "#5a8d7c",
          color: "#fff",
          padding: "1rem",
          borderRadius: "2rem",
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          Router.push("/addcycle");
        }}
      >
        Upload New Cycle Listing
      </div> */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // const res = await axios.get("http://localhost:3000/api/products");

  const res = await pool.query("SELECT * FROM cycles");

  const rows = JSON.stringify(res);

  return {
    props: {
      rows,
    },
  };
};
