import express from "express";
import { VALUE } from "@repo/common/config"

const app = express()

console.log(VALUE);

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});