import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const PORT = 3000;
app.use(cors());

// socket 서버 생성
const io = new Server(server, {
  cors: {
    origin: "*",
  },
  allowEIO3: true,
});

server.listen(PORT, () => {
  console.log(`✅ server ON ${PORT}`);
});
