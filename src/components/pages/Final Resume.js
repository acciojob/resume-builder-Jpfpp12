import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateProfile,
  addEducation,
  deleteEducation,
  updateEducation,
  updateSkills,
  updateProjects,
  updateSocial
} from '../store/resumeActions'; 
import { useHistory } from 'react-router-dom';

export default function FinalResumePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const profile = useSelector((state) => state.profile);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills);
  const projects = useSelector((state) => state.projects);
  const social = useSelector((state) => state.social);

  const [message, setMessage] = useState('');
  const [newEdu, setNewEdu] = useState({
    courseName: '',
    college: '',
    completionYear: '',
    percentage: ''
  });

  const backendUrl = 'https://mockapi.example.com/resume';

  const handleSave = async () => {
    const resumeData = { profile, education, skills, projects, social };
    try {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData),
      });
      if (res.ok) {
        setMessage('Resume saved successfully!');
      } else {
        setMessage('Failed to save resume.');
      }
    } catch (error) {
      setMessage('Error saving resume: ' + error.message);
    }
  };

  const handleLoad = async () => {
    try {
      const res = await fetch(backendUrl);
      if (res.ok) {
        const data = await res.json();
        // Dispatch to Redux store using update* actions
        if (data.profile) dispatch(updateProfile(data.profile));
        if (data.education) dispatch(updateEducation({ index: 0, updated: data.education[0] })); // Example for first item
        if (data.skills) dispatch(updateSkills(data.skills));
        if (data.projects) dispatch(updateProjects(data.projects));
        if (data.social) dispatch(updateSocial(data.social));
        setMessage('Resume loaded successfully!');
      } else {
        setMessage('Failed to load resume.');
      }
    } catch (error) {
      setMessage('Error loading resume: ' + error.message);
    }
  };

  const handleBack = () => {
    history.push('/social');
  };

  // Handler to add education
  const handleAddEducation = () => {
    if (
      newEdu.courseName &&
      newEdu.college &&
      newEdu.completionYear &&
      newEdu.percentage
    ) {
      dispatch(addEducation({ ...newEdu }));
      setNewEdu({ courseName: '', college: '', completionYear: '', percentage: '' });
      setMessage('Education added!');
    } else {
      setMessage('Please fill all education fields.');
    }
  };

  // Handler to delete education
  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
    setMessage('Education deleted!');
  };

  return (
    <div>
      <h2>Final Resume</h2>

      <section>
        <h3>Profile</h3>
        <p><strong>Name:</strong> {profile.fname} {profile.lname}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Website:</strong> {profile.url}</p>
      </section>

      <section>
        <h3>Education</h3>
        <ul>
          {education.map((edu, i) => (
            <li key={i}>
              {edu.courseName} - {edu.college} ({edu.completionYear}) - {edu.percentage}%
              <button type="button" onClick={() => handleDeleteEducation(i)} style={{marginLeft: '10px'}}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Course Name"
            value={newEdu.courseName}
            onChange={e => setNewEdu({ ...newEdu, courseName: e.target.value })}
          />
          <input
            type="text"
            placeholder="College"
            value={newEdu.college}
            onChange={e => setNewEdu({ ...newEdu, college: e.target.value })}
          />
          <input
            type="text"
            placeholder="Completion Year"
            value={newEdu.completionYear}
            onChange={e => setNewEdu({ ...newEdu, completionYear: e.target.value })}
          />
          <input
            type="text"
            placeholder="Percentage"
            value={newEdu.percentage}
            onChange={e => setNewEdu({ ...newEdu, percentage: e.target.value })}
          />
          <button type="button" onClick={handleAddEducation}>Add Education</button>
        </div>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          {projects.map((proj, i) => (
            <li key={i}>
              <strong>{proj.projectName}</strong> ({proj.techStack}): {proj.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Social Media</h3>
        <ul>
          {social.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </section>

      <button type="button" id="back" onClick={handleBack}>
        Back
      </button>
      <button type="button" id="save_continue" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={handleLoad}>
        Load
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
