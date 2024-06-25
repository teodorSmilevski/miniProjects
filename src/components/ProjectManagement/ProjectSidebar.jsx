export default function ProjectSidebar() {
  return (
    <div className="bg-black text-white p-5  rounded-3xl">
      <h2 className="text-3xl font-bold">YOUR PROJECTS</h2>
      <div>
        <button className="rounded-md bg-slate-800 text-slate-500 px-7 py-2 hover:bg-slate-600 hover:text-slate-400">
          + Add Project
        </button>
      </div>
      <ul>projects</ul>
    </div>
  );
}
