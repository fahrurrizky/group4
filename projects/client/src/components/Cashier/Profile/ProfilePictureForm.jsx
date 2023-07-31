import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfilePicture } from '../../redux/actions/cashierActions';

const ProfilePictureForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');

  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  const maxFileSize = 1024 * 1024; // 1MB

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError('');

    if (!file) return; // No file selected

    // Validate file extension
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setError('Invalid file format. Only JPG, PNG, and GIF files are allowed.');
      return;
    }

    // Validate file size
    if (file.size > maxFileSize) {
      setError('File size exceeds the maximum limit of 1MB.');
      return;
    }

    setProfilePicture(file);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profilePicture) {
      setError('Please select a profile picture.');
      return;
    }

    // Assuming you have an action named updateProfilePicture in actions/cashierActions.js
    dispatch(updateProfilePicture(profilePicture));
  };

  return (
    <div>
      <h2>Profile Picture</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png,.gif" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ProfilePictureForm;
