import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function MainPage() {
  return <div>Video</div>;
}
