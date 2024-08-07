import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
});

export async function innerJoinTables(userId: number) {
    try {
        const result = await client.query(
            `SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             INNER JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`,
            [userId]
        );
        console.log("INNER JOIN data:", result.rows);
    } catch (err) {
        console.error("Error during INNER JOIN operation:", err);
    }
}

export async function leftJoinTables(userId: number) {
    try {
        const result = await client.query(
            `SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             LEFT JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`,
            [userId]
        );
        console.log("LEFT JOIN data:", result.rows);
    } catch (err) {
        console.error("Error during LEFT JOIN operation:", err);
    }
}

export async function rightJoinTables(userId: number) {
    try {
        const result = await client.query(
            `SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             RIGHT JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`,
            [userId]
        );
        console.log("RIGHT JOIN data:", result.rows);
    } catch (err) {
        console.error("Error during RIGHT JOIN operation:", err);
    }
}

export async function fullJoinTables() {
    try {
        const result = await client.query(
            `SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             FULL JOIN addresses ON users2.id = addresses.user_id`,
        );
        console.log("FULL JOIN data:", result.rows);
    } catch (err) {
        console.error("Error during FULL JOIN operation:", err);
    }
}
