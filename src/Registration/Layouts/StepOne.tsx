import React from 'react';
import { Field, ErrorMessage, FormikProps } from 'formik';

export const StepOne = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Basic Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <Field
          name="name"
          className="mt-1 p-2 border border-gray-400 w-full"
          placeholder="Enter your name"
        />
        <p className="text-red-500">
          <ErrorMessage name="name" />
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <Field
          name="email"
          type="email"
          className="mt-1 p-2 border border-gray-400 w-full"
          placeholder="Enter your email"
        />
        <p className="text-red-500">
          <ErrorMessage name="email" />
        </p>
      </div>
    </div>
  );
};
