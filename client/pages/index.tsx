import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";

import { useAppDispatch } from "../src/store/hooks";
import { setSocketId, setUserName } from "../src/store/userSlice";

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.req.cookies.name;
  console.log(context.res);

  return { props: { name } };
};

export default function MainPage({ name }: { name: string }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserName(name));
    dispatch(setSocketId(socket.id));
  }, []);
  return <div>Video</div>;
}
