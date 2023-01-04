import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

export default function SignIn({ rows }) {


    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const ph = formData["phone"];
            const pwd = formData["password"];

            rows.forEach(row => {
                if (row.phone === ph) {
                    if (pwd === row.password) {
                        alert("Sign in success");
                        Router.push('/addcycle');
                    }
                }
            });

            alert("Wrong phone or password, try again!");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" onChange={handleChange} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={handleChange} />
            <br />
            <button type="submit">Sign In</button>
        </form>
    );
}

export const getServerSideProps = async (context) => {
    const res = await axios.get("http://localhost:3000/api/users");
    const rows = res.data;

    return {
        props: {
            rows
        },
    };
};