import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import http from "http";

dotenv.config();

const app: Express = express();
const server = http.createServer(app);
const port = process.env.PORT || 3001;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
