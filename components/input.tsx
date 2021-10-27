import React from "react";
import tailshake from "tailshake";

export interface InputProps {
  id: string;
  className?: string;
  name?: string;
  label: string;
  placeHolder?: string;
  disabled?: boolean;
  value: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input = (props: InputProps) => {
  const name = props.name || props.id;
  const type = props.type || "text";
  const placeHolder = props.placeHolder || props.label;
  const inputClassName = tailshake("w-full h-10 placeholder-transparent text-gray-900 disabled:text-gray-400 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary", props.inputClassName);
  const labelClassName = tailshake("absolute left-2 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-600 peer-focus:-top-5 peer-focus:text-sm", props.labelClassName);

  return (
    <div className={tailshake("relative", props.className)}>
      <input
        disabled={props.disabled}
        id={props.id}
        name={name}
        type={type}
        placeholder={placeHolder}
        className={inputClassName}
        value={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className={labelClassName}
      >
        {props.label}
      </label>
    </div>

  );
};
