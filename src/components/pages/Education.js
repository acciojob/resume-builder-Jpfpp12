import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, deleteEducation } from '../store/educationSlice';
import { useHistory } from 'react-router-dom';

export default function EducationPage() {
  const educationList = useSelector((state) => state.education);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    courseName: '',
    completionYear: '',
    college: '',
    percentage: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = () => {
    dispatch(addEducation(formData));
    setFormData({
      courseName: '',
      completionYear: '',
      college: '',
      percentage: '',
    });
  };

  const handleDelete = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleNext = () => {
    history.push('/skills');
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>Education Details</h2>
      <input
        name="courseName"
        placeholder="Course Name"
        value={formData.courseName}
        onChange={handleChange}
      />
      <input
        name="completionYear"
        placeholder="Completion Year"
        value={formData.completionYear}
        onChange={handleChange}
      />
      <input
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
      />
      <input
        name="percentage"
        placeholder="Percentage"
        value={formData.percentage}
        onChange={handleChange}
      />
      <button type="button" id="add_education" onClick={handleAdd}>
        Add Education
      </button>

      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>
            {edu.courseName} - {edu.college} ({edu.completionYear}) - {edu.percentage}%
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
