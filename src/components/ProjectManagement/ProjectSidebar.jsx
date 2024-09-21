/* eslint-disable react/prop-types */
export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <div className="bg-stone-950 text-white p-10   rounded-3xl w-[30rem]">
      <h2 className="text-3xl font-bold pb-8">YOUR PROJECTS</h2>
      <div>
        <button
          className="rounded-md bg-stone-800 text-stone-500 px-8 py-3 text-xl hover:bg-stone-700 hover:text-slate-400 mb-8"
          onClick={onStartAddProject}
        >
          + Add Project
        </button>
      </div>
      <ul>projects</ul>
    </div>
  );
}
