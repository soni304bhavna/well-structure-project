import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const StepTwo = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Personal Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <Field
          name="age"
          type="number"
          className="mt-1 p-2 border border-gray-400 w-full"
          placeholder="Enter your age"
        />
        <p className="text-red-500">
          <ErrorMessage name="age" />
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Weight</label>
        <Field
          name="weight"
          type="number"
          className="mt-1 p-2 border border-gray-400 w-full"
          placeholder="Enter your weight"
        />
        <p className="text-red-500">
          <ErrorMessage name="weight" />
        </p>
      </div>
    </div>
  );
};
