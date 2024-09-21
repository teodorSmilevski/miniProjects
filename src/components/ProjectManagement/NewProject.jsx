/* eslint-disable react/prop-types */
import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onGoBack, onSave }) {
  const modal = useRef();

  const title = useRef("");
  const description = useRef("");
  const date = useRef("");

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredDate.trim() === "" ||
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-400 mb-4">
          Oops... Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid value for every field.
        </p>
      </Modal>
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
            <button
              className="text-lg bg-stone-800 text-stone-50 hover:bg-stone-950 py-2 px-7 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="w-[35rem] mx-auto">
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
