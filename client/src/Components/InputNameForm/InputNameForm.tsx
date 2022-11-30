import React from "react";

import cl from "./InputNameForm.module.scss";

interface IProps {
  value: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  placeholder: string;
  dataLoads: boolean;
}

const InputNameForm = ({ value, changeValue, onSubmit, placeholder, dataLoads }: IProps) => {
  return (
    <div className={cl.wrapper}>
      <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className={cl.inputName} type="text" placeholder={placeholder} value={value} onChange={changeValue} />
      <button className={`${dataLoads || value.length < 1 ? cl.disabled : ""}`} onClick={onSubmit}>
        {dataLoads ? "Loading" : "Submit"}
      </button>
    </div>
  );
};

export default InputNameForm;
