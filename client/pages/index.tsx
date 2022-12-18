import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";

import { useAppDispatch } from "../src/store/hooks";
import { setUser } from "../src/store/userSlice";

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.req.cookies.name;

  return { props: { name } };
};

export default function MainPage({ name }: { name: string }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser({ name, socketId: socket.id }));
  }, []);
  return <div>Video</div>;
}
