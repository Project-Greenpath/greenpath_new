import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import { pinFileToIPFS, pinMetadataToIPFS } from "../services/ipfs";

export default function AddCycle() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const router = useRouter();

  function onFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
    onUpload();
  }

  async function onUpload(e) {
    /* upload image to IPFS */
    // const file = e.target.files[0]
    try {
      const url = await pinFileToIPFS(file);

      // const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log(url, " fileURL");
      setFormData({ ...formData, image: url });
      console.log(url, " URL");
      alert(`fileURL: ${url}`);
    } catch (error) {
      <inputs
        type="file"
        name="Asset"
        className="my-4"
        onChange={onFileChange}
      />;
      console.log("Error uploading file: ", error);
    }
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    console.log(fileUrl, " fileurl");
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload metadata to IPFS */
    const data = {
      name: name,
      description: description,
      image: fileUrl,
    };
    try {
      const url = await pinMetadataToIPFS(data);
      /* after metadata is uploaded to IPFS, return the URL to use it in the transaction */
      console.log(url);
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/cycles", formData);
      if (data.success) {
        alert("Successfully added");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
    backgroundColor: "#d6d6d698",
    padding: "3rem",
    paddingTop: "6rem",
    boxShadow: "#4b514bce 4px 4px 20px",
    borderRadius: "1rem",
    border: "1px solid #ffffff93",
    backdropFilter: "blur(20px) saturate(125%)",
  };

  const labelInputStyles = {
    margin: "10px 0",
  };

  const buttonStyles = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
  };

  return (
    <div
      className="addCycle"
      style={{
        backgroundImage: "url('/images/forest-cycle.jpg')",
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
      <form style={formStyles} onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label style={labelInputStyles} htmlFor="id">
          Admission Number:
        </label>
        <input
          style={labelInputStyles}
          type="text"
          name="id"
          onChange={handleChange}
        />
        <br />
        <label style={labelInputStyles} htmlFor="brand">
          Brand:
        </label>
        <input
          style={labelInputStyles}
          type="text"
          name="brand"
          onChange={handleChange}
        />
        <br />
        <label style={labelInputStyles} htmlFor="rent">
          Rent:
        </label>
        <input
          style={labelInputStyles}
          type="text"
          name="rent"
          onChange={handleChange}
        />
        <br />
        <label style={labelInputStyles} htmlFor="image">
          Image URL:
        </label>
        <input
          style={labelInputStyles}
          type="file"
          name="image"
          onChange={onFileChange}
        />
        <br />
        <label style={labelInputStyles} htmlFor="description">
          Contact Details:
        </label>
        <input
          style={labelInputStyles}
          type="text"
          name="description"
          onChange={handleChange}
        />
        <br />
        <button style={buttonStyles} type="submit">
          Add New Cycle
        </button>
        {/* <label htmlFor="id">ID:</label>
                <input type="text" name="id" onChange={handleChange} />
                <br />
                <label htmlFor="brand">Brand:</label>
                <input type="text" name="brand" onChange={handleChange} />
                <br />
                <label htmlFor="rent">Rent:</label>
                <input type="text" name="rent" onChange={handleChange} />
                <br />
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image" onChange={handleChange} />
                <br />
                <label htmlFor="description">Contact Details:</label>
                <input type="text" name="description" onChange={handleChange} />
                <br />
                <button type="submit">Add Cycle</button> */}
      </form>
    </div>
  );
}
