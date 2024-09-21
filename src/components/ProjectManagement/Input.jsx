/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full  rounded p-2 border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 bg-stone-100";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
