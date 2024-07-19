import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
});

async function createUserTable() {
    await client.connect();
    await client.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
    console.log("Table created successfully.");
}

async function createEntries(name: string ,email: string , password: string) {
    try {
        const insertQuery = "INSERT INTO users (name, email, password) VALUES ($1 , $2 , $3);";
        const value  = [name, email, password];
        const result = await client.query(insertQuery, value);
        console.log("Entry inserted successfully.", result);
    } catch (err) {
        console.error("Error during insertion", err);
    }
}
// createUserTable();
// createEntries();

async function main() {
    try {
        await createUserTable();
        await createEntries("saurabh" ,"saurabh@gmail.com", "123456");
    } catch (error) {
        console.error("An error occurred:", error);
    }
    finally {
        await client.end();
        console.log("Database connection closed.");
    }
}
main();

// Password : 2310_SQL_2310
// postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres