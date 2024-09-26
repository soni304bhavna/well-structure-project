import React from "react";

type Props = {
  id: any;
  name: string;
  checked: any;
  onChange: (e: any) => void;
  className?: string;
  label: string;
};

const ATMCheckBox = ({
  id,
  name,
  checked,
  onChange,
  className,
  label,
}: Props) => {
  return (
    <>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id={id}
          name={name}
          // checked={checked}
          // onChange={onChange}
        />
        {label && (
          <label className="font-bold text-blue-950 font-mono">{label}</label>
        )}
      </div>
    </>
  );
};

export default ATMCheckBox;
