import styles from '../styles/Home.module.css'
import { pool } from '../services/mysql';
import { useEffect } from 'react';

export default function Home({ rows }) {

  useEffect(() => {
    console.log(rows)
  }, []);

  return (
    <>
      hello
    </>
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
