import { ErrorMessage } from "formik";
import React from "react";

function FormError(props: { name: string }) {
  return (
    <ErrorMessage name={props.name}>
      {(msg) => (
        <div className="mt-2 text-xs font-semibold text-accent-600">{msg}</div>
      )}
    </ErrorMessage>
  );
}

export default FormError;
