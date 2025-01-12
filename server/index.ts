import express from "express";
import { router } from "./api";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors())
app.use("/", router)

app.listen(port, () => {
    console.log("Server running on port 3000");
});