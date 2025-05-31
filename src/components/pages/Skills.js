import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill } from '../store/skillsSlice';
import { useHistory } from 'react-router-dom';

export default function Skills() {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const history = useHistory();

  const [skill, setSkill] = useState('');

  const handleAdd = () => {
    if (skill.trim() !== '') {
      dispatch(addSkill(skill.trim()));
      setSkill('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteSkill(index));
  };

  const handleNext = () => {
    history.push('/projects');
  };

  const handleBack = () => {
    history.push('/education');
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        name="skill"
        placeholder="Enter a skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button type="button" id="add_skill" onClick={handleAdd}>
        Add Skill
      </button>

      <ul>
        {skills.map((s, index) => (
          <li key={index}>
            {s}
            <button id="delete_skill" onClick={() => handleDelete(index)}>
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
