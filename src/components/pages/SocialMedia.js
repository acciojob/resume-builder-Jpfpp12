import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocial, deleteSocial } from '../store/socialMediaSlice';
import { useHistory } from 'react-router-dom';

export default function SocialMedia() {
  const socials = useSelector((state) => state.social);
  const dispatch = useDispatch();
  const history = useHistory();

  const [socialLink, setSocialLink] = useState('');

  const handleAdd = () => {
    if (socialLink.trim() !== '') {
      dispatch(addSocial(socialLink.trim()));
      setSocialLink('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteSocial(index));
  };

  const handleNext = () => {
    history.push('/resume');
  };

  const handleBack = () => {
    history.push('/projects');
  };

  return (
    <div>
      <h2>Social Media Links</h2>
      <input
        name="social"
        placeholder="Enter social media link"
        value={socialLink}
        onChange={(e) => setSocialLink(e.target.value)}
      />
      <button type="button" id="add_social" onClick={handleAdd}>
        Add Social
      </button>

      <ul>
        {socials.map((link, index) => (
          <li key={index}>
            {link}
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
