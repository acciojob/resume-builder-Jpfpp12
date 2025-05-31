import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function FinalResumePage() {
  const profile = useSelector((state) => state.profile);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills);
  const projects = useSelector((state) => state.projects);
  const social = useSelector((state) => state.social);
  const history = useHistory();

  const handleBack = () => {
    history.push('/social');
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
            </li>
          ))}
        </ul>
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
    </div>
  );
}
