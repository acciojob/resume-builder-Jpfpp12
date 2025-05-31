import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, deleteProject } from '../store/projectsSlice';
import { useHistory } from 'react-router-dom';

export default function Projects() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    projectName: '',
    techStack: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = () => {
    const { projectName, techStack, description } = formData;
    if (projectName && techStack && description) {
      dispatch(addProject(formData));
      setFormData({
        projectName: '',
        techStack: '',
        description: '',
      });
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteProject(index));
  };

  const handleNext = () => {
    history.push('/social');
  };

  const handleBack = () => {
    history.push('/skills');
  };

  return (
    <div>
      <h2>Projects</h2>

      <input
        name="projectName"
        placeholder="Project Name"
        value={formData.projectName}
        onChange={handleChange}
      />
      <input
        name="techStack"
        placeholder="Tech Stack"
        value={formData.techStack}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="button" id="add_project" onClick={handleAdd}>
        Add Project
      </button>

      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            <strong>{proj.projectName}</strong> ({proj.techStack}) — {proj.description}
            <button id="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button type="button" id="back" onClick={handleBack}>Back</button>
      <button type="button" id="next" onClick={handleNext}>Next</button>
    </div>
  );
}
