import ProjectSidebar from "../components/ProjectManagement/ProjectSidebar";
import ProjectMain from "../components/ProjectManagement/ProjectMain";

export default function ProjectManagement() {
  return (
    <section className="container mx-auto  py-3 grid grid-cols-3 gap-5 h-screen">
      <ProjectSidebar />
      <ProjectMain />
    </section>
  );
}
