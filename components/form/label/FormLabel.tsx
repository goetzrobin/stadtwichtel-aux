import React, { PropsWithChildren } from "react";

function FormLabel(props: PropsWithChildren<{ label: string; for: string }>) {
  return (
    <label
      htmlFor={props.for}
      className="block min-h-[5.2rem] text-sm font-medium text-gray-700"
    >
      {props.label}
      {props.children}
    </label>
  );
}

export default FormLabel;
