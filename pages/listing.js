import '../styles/Home.module.css'
import Card from '../components/card'
import { pool } from '../services/mysql';
import { useEffect } from 'react';

export default function Listing({ rows }) {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '16px',
            width: '100%',
            margin: '0 auto',
            padding: '0 16px',
        },
    };

    useEffect(() => {
        console.log(rows)
    }, []);

    return (
        <div style={styles.container}>
            {JSON.parse(rows).map(data => (
                <Card key={data.id} {...data} />
            ))}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    // const res = await axios.get("http://localhost:3000/api/products");

    const res = await pool.query('SELECT * FROM cycles');

    const rows = JSON.stringify(res);

    return {
        props: {
            rows
        },
    };
};
