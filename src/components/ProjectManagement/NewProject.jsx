/* eslint-disable react/prop-types */
import Input from "./Input";

export default function NewProject({ onGoBack }) {
  return (
    <div className="w-full mt-16">
      <menu className="flex items-center justify-end gap-10 my-4 w-[35rem] mx-auto">
        <li>
          <button
            className="text-lg text-stone-800 hover:text-stone-950"
            onClick={onGoBack}
          >
            Cancel
          </button>
        </li>
        <li>
          <button className="text-lg bg-stone-800 text-stone-50 hover:bg-stone-950 py-2 px-7 rounded">
            Save
          </button>
        </li>
      </menu>
      <div className="w-[35rem] mx-auto">
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
