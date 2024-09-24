import { useState } from "react";

import NewProject from "../components/ProjectManagement/NewProject";
import ProjectSidebar from "../components/ProjectManagement/ProjectSidebar";
import NoProjectSelected from "../components/ProjectManagement/NoProjectSelected";
import SelectedProject from "../components/ProjectManagement/SelectedProject";

export default function ProjectManagement() {
  const [projectState, setProjectState] = useState({
    activeProject: undefined,
    projects: [],
    tasks: [],
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
  function onOpenProject(projectData) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        activeProject: projectData.id,
        currentProject: projectData,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      let newArr = prevState.projects.splice(prevState.currentProject, 1);
      return {
        ...prevState,
        projects: [...newArr],
        activeProject: undefined,
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.currentProject,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let content;

  const selectedProjectTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.currentProject
  );

  if (projectState.activeProject === null)
    content = <NewProject onGoBack={handleGoBack} onSave={handleAddProject} />;
  else if (projectState.activeProject === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  else if (projectState.activeProject === projectState.currentProject.id)
    content = (
      <SelectedProject
        data={projectState.currentProject}
        handleDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedProjectTasks}
      />
    );
  return (
    <section className="container mx-auto  p-5 flex  gap-5 h-screen ">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onOpenProject={onOpenProject}
      />
      {content}
    </section>
  );
}
