import { useState } from "react";

import InputNameForm from "../../src/Components/InputNameForm/InputNameForm";

import cl from "./register.module.scss";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(" ", "");
    if (value.length > 10) {
      return;
    } else {
      setName(value);
    }
  };
  return (
    <div className={cl.wrapper}>
      <InputNameForm placeholder="name" value={name} changeValue={changeName} />
    </div>
  );
};

export default RegisterPage;
