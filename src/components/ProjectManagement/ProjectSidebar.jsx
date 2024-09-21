/* eslint-disable react/prop-types */
export default function ProjectSidebar({ onStartAddProject, projects }) {
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
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-start mb-5 px-4 py-1 rounded text-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              <p>{project.title}</p>
              <p className="text-sm ">Due date {project.date}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
