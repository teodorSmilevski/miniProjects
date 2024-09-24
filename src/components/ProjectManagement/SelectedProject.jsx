/* eslint-disable react/prop-types */
import Tasks from "./Tasks";

export default function SelectedProject({
  data,
  handleDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const title = data.title;
  const description = data.description;
  const date = data.date;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-12  w-full">
      <header className="w-[35rem] h-[15rem]">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-3xl uppercase">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">Project due: {formattedDate}</p>

        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
