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
exports.fullJoinTables = exports.rightJoinTables = exports.leftJoinTables = exports.innerJoinTables = void 0;
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres.jcxsjhjlwuwivprsxtjh:2310_SQL_2310@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
});
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
