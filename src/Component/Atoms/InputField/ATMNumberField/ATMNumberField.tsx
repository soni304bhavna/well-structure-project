import React from "react";

type Props = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (e: any) => void;
  className?: string;
};

const ATMNumberField = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  className,
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="font-bold text-blue-950 font-mono">{label}</label>}
      <input
        type="number"
        name={name}
        value={value}
        min={"0"}
        placeholder={placeholder}
        onChange={onChange}
        className={`p-2 border rounded border-gray-400 ${className}`}
      />
    </div>
  );
};

export default ATMNumberField;
