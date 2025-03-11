import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (field: string, value: string) => void;
};

const InputField = (props: InputFieldProps) => {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.onChange(props.name, value);
  }

  return (
    <div>
      <h3 className="text-gray-600 ml-[10%] uppercase text-sm tracking-wider">
        {props.label}
      </h3>
      <input
        type={props.type ? props.type : "test"}
        name={props.name}
        onChange={(e) => handleInput(e)}
        value={props.value}
        className="bg-gray-50 rounded-sm mx-[10%] w-4/5 p-2.5 border border-gray-200 outline-none transition-all duration-200 tracking-wide focus:shadow-sm focus:shadow-gray-300 focus:border-Zinc-300"
      />
    </div>
  );
};

export default InputField;
