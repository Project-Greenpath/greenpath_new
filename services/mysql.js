import mysql from "serverless-mysql";

const pool = mysql({
    config: {
        host: 'db4free.net',
        port: 3306,
        user: 'greeenpath',
        password: 'greenpath',
        database: 'greeenpath'
    },
});

export { pool };
