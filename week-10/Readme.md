
```markdown
# PostgreSQL and Node.js Integration

This project demonstrates how to create tables, insert data, and perform different types of joins using PostgreSQL and Node.js. The main goal is to show how to efficiently join data from two tables, `users2` and `addresses`, using various SQL join types.

## Prerequisites

- Node.js
- PostgreSQL
- `pg` Node.js package for PostgreSQL integration

## Project Structure

- `index.ts`: Main entry file for creating tables, inserting data, and performing joins.
- `joins.ts`: Contains functions for different types of SQL joins.

## Setup

1. **Install Dependencies**
   ```bash
   npm install pg
   ```

2. **Database Configuration**
   Configure your PostgreSQL connection string in the `index.ts` file:
   ```typescript
   const client = new Client({
       connectionString: "postgresql://username:password@hostname:port/database"
   });
   ```

## Creating Tables

### Users Table
The `users2` table stores user details with the following schema:
- `id`: Primary key, auto-incremented.
- `username`: Unique, not null.
- `email`: Unique, not null.
- `password`: Not null.
- `created_at`: Timestamp with timezone, default to current timestamp.

```typescript
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
    console.log("User table created successfully", result);
}
```

### Address Table
The `addresses` table stores user addresses linked to the `users2` table:
- `id`: Primary key, auto-incremented.
- `user_id`: Foreign key referencing `users2(id)`.
- `city`: Not null.
- `country`: Not null.
- `street`: Not null.
- `pincode`: Optional.
- `created_at`: Timestamp with timezone, default to current timestamp.

```typescript
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
    console.log("Address table created successfully", result);
}
```

## Inserting Data

### Insert User
Inserts a new user into the `users2` table.

```typescript
async function insertUser(name: string, email: string, password: string) {
    try {
        const insertUser = "INSERT INTO users2 (username, email, password) VALUES($1, $2, $3);";
        const values = [name, email, password];
        const result = await client.query(insertUser, values);
        console.log("User inserted successfully", result);
    } catch (err) {
        console.error(err);
    }
}
```

### Insert Address
Inserts a new address linked to a user in the `addresses` table.

```typescript
async function insertAddress(user_id: number, city: string, country: string, street: string, pincode: string) {
    try {
        const insertAddress = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5);";
        const values = [user_id, city, country, street, pincode];
        const result = await client.query(insertAddress, values);
        console.log("Address inserted successfully", result);
    } catch (err) {
        console.error(err);
    }
}
```

### Insert User and Address
Inserts a new user and their address within a transaction to ensure data integrity.

```typescript
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
```

## Performing Joins

### Inner Join
Fetches user details along with their address, only if both exist.

```typescript
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
```

### Left Join
Fetches all users, along with their address if available.

```typescript
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
```

### Right Join
Fetches all addresses, along with their corresponding user details if available.

```typescript
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
```

### Full Join
Fetches all users and addresses, showing the relationship where it exists.

```typescript
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
```

## Main Function
The main function demonstrates the usage of the above functions.

```typescript
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
```

## Joins Overview

### INNER JOIN
Returns rows when there is at least one match in both tables.
```sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
```
Use Case: Find all users with their addresses. If a user hasn’t filled their address, that user shouldn’t be returned.

### LEFT JOIN
Returns all rows from the left table, and the matched rows from the right table.
```sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
```
Use Case: List all users from your database along with their address information (if they’ve provided it).

### RIGHT JOIN
Returns all

 rows from the right table, and the matched rows from the left table.
```sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
```
Use Case: Useful when starting with the addresses table and optionally including user information.

### FULL JOIN
Returns rows when there is a match in one of the tables.
```sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
```
Use Case: Combine all records from both users and addresses, showing the relationship where it exists.

## Notes on Joins in Node.js
Using joins in SQL can significantly reduce latency, simplify application logic, and maintain transactional integrity. Always prefer using joins over multiple queries for related data.

---
