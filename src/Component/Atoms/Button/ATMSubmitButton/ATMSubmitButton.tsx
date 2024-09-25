import React from "react";

type Props = {
  //   name: string;
  //   value: string;
  //   label?: string;
  //   placeholder?: string;
  //   onChange: (e: any) => void;
  className?: string;
};

const ATMSubmitButton = ({ className }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <button type="submit" className={`${className} `}>
        Submit
      </button>
    </div>
  );
};

export default ATMSubmitButton;
