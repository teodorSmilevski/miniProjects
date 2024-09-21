import { useState } from "react";

import NewProject from "../components/ProjectManagement/NewProject";
import ProjectSidebar from "../components/ProjectManagement/ProjectSidebar";
import NoProjectSelected from "../components/ProjectManagement/NoProjectSelected";

export default function ProjectManagement() {
  const [projectState, setProjectState] = useState({
    activeProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        activeProject: null,
      };
    });
  }

  function handleGoBack() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        activeProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        activeProject: undefined,
      };
    });
  }

  let content;

  if (projectState.activeProject === null)
    content = <NewProject onGoBack={handleGoBack} onSave={handleAddProject} />;
  else if (projectState.activeProject === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <section className="container mx-auto  p-5 flex  gap-5 h-screen ">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </section>
  );
}
