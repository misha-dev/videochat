import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

dotenv.config();
const port = process.env.PORT || 3001;

const app: Express = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.use(cookieParser());

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/set-name-cookie", (req: Request, res: Response) => {
  const { name } = req.query;
  res.cookie("name", name);
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
