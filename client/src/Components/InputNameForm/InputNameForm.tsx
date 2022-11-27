import React from "react";

import cl from "./InputNameForm.module.scss";

interface IProps {
  value: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputNameForm = ({ value, changeValue, placeholder }: IProps) => {
  return (
    <div className={cl.wrapper}>
      <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className={cl.inputName} type="text" placeholder={placeholder} value={value} onChange={changeValue} />
      <button>Submit</button>
    </div>
  );
};

export default InputNameForm;
