/* eslint-disable react/prop-types */
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onOpenProject,
}) {
  return (
    <div className="bg-stone-950 text-white p-10   rounded-3xl w-[30rem]">
      <h2 className="text-xl font-bold pb-8">YOUR PROJECTS</h2>
      <div>
        <button
          className="rounded-md bg-stone-800 text-stone-500 px-6 py-2 text-md hover:bg-stone-700 hover:text-slate-400 mb-8"
          onClick={onStartAddProject}
        >
          + Add Project
        </button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className="w-full text-start mb-5 px-4 py-1 rounded text-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => onOpenProject(project)}
            >
              <p className="text-md">{project.title}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
