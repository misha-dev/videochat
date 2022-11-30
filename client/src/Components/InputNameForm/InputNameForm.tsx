import React from "react";

import cl from "./InputNameForm.module.scss";

interface IProps {
  value: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  placeholder: string;
}

const InputNameForm = ({ value, changeValue, onSubmit, placeholder }: IProps) => {
  return (
    <div className={cl.wrapper}>
      <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className={cl.inputName} type="text" placeholder={placeholder} value={value} onChange={changeValue} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default InputNameForm;
