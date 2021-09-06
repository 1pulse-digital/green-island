import React from "react";
import tailshake from "tailshake";

export interface InputProps {
  id: string;
  className?: string;
  name?: string;
  label: string;
  placeHolder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const name = props.name || props.id;
  const placeHolder = props.placeHolder || props.label;

  return (
    <div className={tailshake("relative", props.className)}>
      <input
        id={props.id}
        name={name}
        type="text"
        placeholder={placeHolder}
        className="w-full h-10 placeholder-transparent text-gray-900 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary"
        value={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className="absolute left-2 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-600 peer-focus:-top-5 peer-focus:text-sm"
      >
        {props.label}
      </label>
    </div>

  );
};
