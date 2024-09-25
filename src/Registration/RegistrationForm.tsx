import { ErrorMessage, FormikProps } from "formik";
import {StepperFormLayout } from "./Layouts/StepperFormLayout";
import { Step } from "./Layouts/Step";
import { StepOne } from "./Layouts/StepOne";
import { StepTwo } from "./Layouts/StepTwo";

type Props = {
  formikProps: FormikProps<any>;
};

const RegistrationForm = ({ formikProps }: Props) => {
  const {} = formikProps;

  return (
    <div className="container mx-auto p-8">
      {/* <h1 className="text-2xl font-bold mb-6">Stepper Form with Formik</h1> */}
      {/* <StepperFormLayout/> */}
        <Step>
          <StepOne />
        </Step>
        <Step>
          <StepTwo />
        </Step>
        </div> 
 );
};

export default RegistrationForm;
