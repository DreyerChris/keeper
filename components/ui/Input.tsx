import { ChangeEvent } from "react";
import Status from "./Status";

export type InputProps = {
  value: string;
  label: string;
  name: string;
  error: string;
  onChange: (e: string) => void;
};

function Input({ value, label, name, error, onChange }: InputProps) {
  return (
    <div className="w-full h-auto flex flex-col space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        className="px-4 py-2 border-solid border-stone-900 border rounded-lg"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      {error && <Status type="error">{error}</Status>}
    </div>
  );
}

export default Input;
