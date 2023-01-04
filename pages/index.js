import styles from '../styles/Home.module.css'
import { query } from '../services/mysql';
import { useEffect } from 'react';

export default function Home() {
  async function test() {
    const rows = await query('SELECT * FROM users');
    console.log(rows);
  }

  useEffect(() => {
    test();
  })

  return (
    <>
      hello
    </>
  )
}
