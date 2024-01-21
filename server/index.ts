import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import "./scrape";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    console.log("dsaadsdasdas")
    res.json("Works");
})

app.listen(process.env.PORT, () => {
    console.log(`Server on port http://localhost:${process.env.PORT}...`);
})