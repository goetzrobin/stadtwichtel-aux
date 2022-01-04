import React, { PropsWithChildren } from "react";

function FormSection(
  props: PropsWithChildren<{ headline: string; description: string }>
) {
  return (
    <div className="my-10">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-stone-800">
              {props.headline}
            </h3>
            <p className="mt-1 text-bg-200">{props.description}</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{props?.children}</div>
      </div>
    </div>
  );
}

export default FormSection;
