import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddCycle() {

    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/cycles', formData);
            if (data.success) {
                alert("Successfully added");
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label htmlFor="id">ID:</label>
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
            <button type="submit">Add Cycle</button>
        </form>
    );
}
