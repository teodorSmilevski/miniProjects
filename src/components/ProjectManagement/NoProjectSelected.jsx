/* eslint-disable react/prop-types */
import noProject from "../../assets/no-projects.png";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-full">
      <img
        src={noProject}
        alt="empty task list"
        className="w-16 h-16 mx-auto"
      />
      <h1 className="text-2xl font-bold text-stone-500 mt-8">
        No Project Selected
      </h1>
      <p className="text-xl text-stone-400 mt-3">
        Select a project or get started with a new one
      </p>

      <p>
        <button
          className="bg-stone-800  py-3 px-6 rounded-xl mt-8 hover:bg-stone-950 text-stone-400"
          onClick={onStartAddProject}
        >
          Create new project
        </button>
      </p>
    </div>
  );
}
