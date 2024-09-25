import React from 'react';

type StepProps = {
  children: React.ReactNode;
};

export const Step = ({ children }: StepProps) => {
  return <div>{children}</div>;
};
