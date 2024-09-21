// eslint-disable-next-line react/prop-types
export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full  rounded p-2 border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 bg-stone-100";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
