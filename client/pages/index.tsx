import { io } from "socket.io-client";

const socket = io(process.env.NEXT_SERVER_URL as string);

export default function MainPage() {
  return <div>Video</div>;
}
