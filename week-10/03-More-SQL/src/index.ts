import { Client } from 'pg';
// import { innerJoinTables,leftJoinTables, rightJoinTables, fullJoinTables } from './joins';

const client = new Client({
    connectionString: "postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
});

async function createUsersTable() {
    const result = await client.query(
        `
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `
    );
    console.log("User created successfully" + result);
}

async function createAddressTable() {
    const result = await client.query(
        `CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
        );`
    );
}

async function insertUser(name: string, email: string, password: string) {
    try {
        const insertUser = "INSERT INTO users2 (username, email, password) VALUES($1, $2, $3);";
        const value = [name, email, password];
        const result = await client.query(insertUser, value);
        console.log("User inserted successfully" + result);
    } catch (err) {
        console.error(err);
    }
}

async function insertAddress(user_id: number, city: string, country: string, street: string, pincode: string) {
    try {
        const insertAddress = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5);";
        const value = [user_id, city, country, street, pincode];
        const result = await client.query(insertAddress, value);
        console.log("Address inserted successfully" + result);
    } catch (err) {
        console.error(err);
    }
}

async function findEntry() {
    try {
        const result1 = await client.query("SELECT * FROM users2;");
        const result2 = await client.query("SELECT * FROM addresses;");
        console.log("Entry found successfully.", result1.rows);
        console.log("Entry found successfully.", result2.rows);
    } catch (err) {
        console.error("Error during finding", err);
    }
}

async function insertUserAndAddress(username: string, email: string, password: string, city: string, country: string, street: string, pincode: string) {
    try {
        await client.query("BEGIN");

        const insertUserQuery = "INSERT INTO users2 (username, email, password) VALUES($1, $2, $3) RETURNING id;";
        const userValues = [username, email, password];
        const userResult = await client.query(insertUserQuery, userValues);
        const userId = userResult.rows[0].id;

        const insertAddressQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5);";
        const addressValues = [userId, city, country, street, pincode];
        await client.query(insertAddressQuery, addressValues);

        await client.query("COMMIT");
        console.log("Transaction completed successfully");
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("Transaction failed", err);
    }
}

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


export async function main() {
    await client.connect();
    try {
        // Uncomment the desired function call:
        // await createUsersTable();
        // await createAddressTable();
        // await insertUser("SAURABH3", "saurabh3@gmail.com", "123456");
        // await insertAddress(1, "Delhi1", "India1", "Street 1", "1100011");
        // await insertUserAndAddress('johndoe', 'john.doe@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
        // await findEntry();
        await innerJoinTables(6);  // Example usage of join function
        await leftJoinTables(6);
        await rightJoinTables(6);
        await fullJoinTables();
    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        await client.end();
    }
}

main();
