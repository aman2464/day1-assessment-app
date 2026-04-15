import React, { useState } from 'react';

const LearnerEnrollmentForm = ({ onAddLearner }) => {
  
  const [learnerName, setLearnerName] = useState('');
  const [learnerAge, setLearnerAge] = useState('');
  const [courseName, setCourseName] = useState('');

  
  const handleSubmission = (e) => {
    e.preventDefault();

    
    if (!learnerName || !learnerAge || !courseName) {
      alert("All fields are mandatory!");
      return;
    }

    
    onAddLearner({
      id: Math.random(),
      fullName: learnerName,
      age: Number(learnerAge),
      subject: courseName
    });

    
    setLearnerName('');
    setLearnerAge('');
    setCourseName('');
  };

  return (
    <form onSubmit={handleSubmission} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Name" 
        value={learnerName} 
        onChange={(e) => setLearnerName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={learnerAge} 
        onChange={(e) => setLearnerAge(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Course" 
        value={courseName} 
        onChange={(e) => setCourseName(e.target.value)} 
      />
      <button type="submit">Register Learner</button>
    </form>
  );
};

export default LearnerEnrollmentForm;