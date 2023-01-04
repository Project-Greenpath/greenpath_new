import { pool } from "../../../services/mysql";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUsers(req, res);
        case "POST":
            return await addUser(req, res);
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getUsers = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const results = await pool.query("SELECT * FROM students");
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const addUser = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const { id, collegeid, full_name, department, yog, phone, password } = req.body;
        const sql = 'INSERT INTO students (id, collegeid, full_name, department, yog, phone, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const params = [id, collegeid, full_name, department, yog, phone, password];
        const result = await pool.query(sql, params);
        res.status(200).json({ success: true, result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error });
    }
};


