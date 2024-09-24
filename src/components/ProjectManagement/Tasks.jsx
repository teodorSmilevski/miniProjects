/* eslint-disable react/prop-types */
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="w-[35rem]">
      <h2>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}

      <ul className=" p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => onDelete(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
