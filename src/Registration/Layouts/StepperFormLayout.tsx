import React, { useState } from 'react';
import { Formik, Form, FormikConfig, FormikValues } from 'formik';
import ATMSubmitButton from '../../Component/Atoms/Button/ATMSubmitButton/ATMSubmitButton';

type FormikStepperProps = FormikConfig<FormikValues>;

export const StepperFormLayout = ({ children, ...props }: FormikStepperProps) => {
  const [step, setStep] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const isLastStep = () => step === steps.length - 1;

  const handleNext = async (values: FormikValues, actions: any) => {
    if (isLastStep()) {
      await props.onSubmit(values, actions);
    } else {
      setStep((s) => s + 1);
      actions.setTouched({});
    }
  };

  return (
    <Formik
      {...props}
      onSubmit={handleNext}
    >
      {({ isSubmitting }) => (
        <Form>
          {steps[step]}
          <div className="mt-4">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="mr-2 p-2 bg-gray-400 text-white"
              >
                Back
              </button>
            )}
            {/* <button type="submit" className="p-2 bg-blue-600 text-white">
              {isSubmitting ? 'Submitting...' : isLastStep() ? 'Submit' : 'Next'}
            </button> */}
            {/* {isSubmitting ? 'Submitting...' : isLastStep() ? 'Submit' : 'Next'} */}
            <ATMSubmitButton
            className='p-2 bg-blue-600 text-white'
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
