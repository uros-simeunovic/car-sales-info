import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Works");
})

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}...`);
})