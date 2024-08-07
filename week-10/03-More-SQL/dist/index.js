"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.fullJoinTables = exports.rightJoinTables = exports.leftJoinTables = exports.innerJoinTables = void 0;
const pg_1 = require("pg");
// import { innerJoinTables,leftJoinTables, rightJoinTables, fullJoinTables } from './joins';
const client = new pg_1.Client({
    connectionString: "postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log("User created successfully" + result);
    });
}
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
        );`);
    });
}
function insertUser(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertUser = "INSERT INTO users2 (username, email, password) VALUES($1, $2, $3);";
            const value = [name, email, password];
            const result = yield client.query(insertUser, value);
            console.log("User inserted successfully" + result);
        }
        catch (err) {
            console.error(err);
        }
    });
}
function insertAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertAddress = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5);";
            const value = [user_id, city, country, street, pincode];
            const result = yield client.query(insertAddress, value);
            console.log("Address inserted successfully" + result);
        }
        catch (err) {
            console.error(err);
        }
    });
}
function findEntry() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result1 = yield client.query("SELECT * FROM users2;");
            const result2 = yield client.query("SELECT * FROM addresses;");
            console.log("Entry found successfully.", result1.rows);
            console.log("Entry found successfully.", result2.rows);
        }
        catch (err) {
            console.error("Error during finding", err);
        }
    });
}
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.query("BEGIN");
            const insertUserQuery = "INSERT INTO users2 (username, email, password) VALUES($1, $2, $3) RETURNING id;";
            const userValues = [username, email, password];
            const userResult = yield client.query(insertUserQuery, userValues);
            const userId = userResult.rows[0].id;
            const insertAddressQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5);";
            const addressValues = [userId, city, country, street, pincode];
            yield client.query(insertAddressQuery, addressValues);
            yield client.query("COMMIT");
            console.log("Transaction completed successfully");
        }
        catch (err) {
            yield client.query("ROLLBACK");
            console.error("Transaction failed", err);
        }
    });
}
function innerJoinTables(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             INNER JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`, [userId]);
            console.log("INNER JOIN data:", result.rows);
        }
        catch (err) {
            console.error("Error during INNER JOIN operation:", err);
        }
    });
}
exports.innerJoinTables = innerJoinTables;
function leftJoinTables(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             LEFT JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`, [userId]);
            console.log("LEFT JOIN data:", result.rows);
        }
        catch (err) {
            console.error("Error during LEFT JOIN operation:", err);
        }
    });
}
exports.leftJoinTables = leftJoinTables;
function rightJoinTables(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             RIGHT JOIN addresses ON users2.id = addresses.user_id
             WHERE users2.id = $1;`, [userId]);
            console.log("RIGHT JOIN data:", result.rows);
        }
        catch (err) {
            console.error("Error during RIGHT JOIN operation:", err);
        }
    });
}
exports.rightJoinTables = rightJoinTables;
function fullJoinTables() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`SELECT users2.id, users2.username, users2.email, addresses.city, addresses.country, addresses.street, addresses.pincode
             FROM users2
             FULL JOIN addresses ON users2.id = addresses.user_id`);
            console.log("FULL JOIN data:", result.rows);
        }
        catch (err) {
            console.error("Error during FULL JOIN operation:", err);
        }
    });
}
exports.fullJoinTables = fullJoinTables;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            // Uncomment the desired function call:
            // await createUsersTable();
            // await createAddressTable();
            // await insertUser("SAURABH3", "saurabh3@gmail.com", "123456");
            // await insertAddress(1, "Delhi1", "India1", "Street 1", "1100011");
            // await insertUserAndAddress('johndoe', 'john.doe@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
            // await findEntry();
            yield innerJoinTables(6); // Example usage of join function
            yield leftJoinTables(6);
            yield rightJoinTables(6);
            yield fullJoinTables();
        }
        catch (err) {
            console.error("An error occurred:", err);
        }
        finally {
            yield client.end();
        }
    });
}
exports.main = main;
main();
