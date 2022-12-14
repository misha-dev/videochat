import { useRouter } from "next/router";
import { useState } from "react";

import InputNameForm from "../../src/Components/InputNameForm/InputNameForm";

import cl from "./register.module.scss";

const RegisterPage = () => {
  const [dataLoads, setDataLoads] = useState(false);
  const [name, setName] = useState("");
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(" ", "");
    if (value.length > 10) {
      return;
    } else {
      setName(value);
    }
  };
  const router = useRouter();

  const refreshPage = () => {
    router.replace(router.asPath, undefined, { scroll: false });
  };
  const submitName = async () => {
    setDataLoads(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}` + `set-name-cookie?name=${name}`, { credentials: "include" });
    if (response.ok) {
      refreshPage();
    } else {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className={cl.wrapper}>
      <InputNameForm dataLoads={dataLoads} onSubmit={submitName} placeholder="name" value={name} changeValue={changeName} />
    </div>
  );
};

export default RegisterPage;
