/* UploadProof.js */
import React, { useState } from 'react';
import axios from 'axios';

const UploadProof = ({ taskId }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = e => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('proof', file);
    try {
      await axios.post(`http://localhost:5000/api/tasks/${taskId}/upload`, formData);
      alert('Proof uploaded!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-2">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-purple-600 text-white px-2 py-1 rounded ml-2">Upload</button>
    </div>
  );
};

export default UploadProof;
