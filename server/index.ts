import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

dotenv.config();
const port = process.env.PORT || 3001;
const clientURL = process.env.CLIENT_URL as string;

const app: Express = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: clientURL, methods: ["GET", "POST"] },
});

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL as string,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.get("/set-name-cookie", (req: Request, res: Response) => {
  const { name } = req.query;

  res.cookie("name", name, {
    maxAge: 86400000, // 1 day
    httpOnly: true,
  });
  res.json({ name });
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
