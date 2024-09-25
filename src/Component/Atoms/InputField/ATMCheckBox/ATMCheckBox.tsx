import React from "react";

type Props = {
    id: any
  name: string;
  checked: any;
  onChange: (e: any) => void;
  className?: string;
};

const ATMCheckBox = ({
  id,
  name,
  checked,
  onChange,
  className,
}: Props) => {
  return (
    <>
    <h3 className="font-semibold">Select Meal Type:</h3>
       <div className="flex items-center mb-2">
         <input
           type={"checkbox"}
           id={id}
           name={name}
           checked={checked}
           onChange={onChange}
           className={`${className}`}
         />
         </div>
    </>
    // <div className="flex flex-col space-y-2">
    //   {label && <label className="font-bold text-blue-950 font-mono">{label}</label>}
    //   <input
    //     type="checkbox"
    //     name={name}
    //     value={value}
    //     placeholder={placeholder}
    //     onChange={onChange}
    //     className={`p-2 border rounded border-gray-400 ${className}`}
    //   />
    // </div>
  );
};

export default ATMCheckBox;
