import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/profileSlice';
import { useHistory } from 'react-router-dom';

export default function ProfilePage() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    dispatch(updateProfile(formData));
    history.push('/education');
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <form>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="Image URL"
          value={formData.url}
          onChange={handleChange}
        />
        <button type="button" id="next" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}
