import React, { PropsWithChildren } from "react";

function FormContainer(props: PropsWithChildren<unknown>) {
  return (
    <div className="overflow-hidden rounded-md shadow">
      <div className="px-4 py-5 bg-bg sm:p-6">
        <div className="grid grid-cols-6 pb-4 gap-x-6 gap-y-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
