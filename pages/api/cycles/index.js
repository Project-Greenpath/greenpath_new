import { pool } from "../../../services/mysql";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getCycles(req, res);
        case "POST":
            return await addCycle(req, res);
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getCycles = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const results = await pool.query("SELECT * FROM cycles");
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const addCycle = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const { id, brand, rent, image, description } = req.body;
        const sql = 'INSERT INTO cycles (id, brand, rent, image, description) VALUES (?, ?, ?, ?, ?)';
        const params = [id, brand, rent, image, description];
        const result = await pool.query(sql, params);
        res.status(200).json({ success: true, result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error });
    }
};


