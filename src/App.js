import React, { useState, useEffect } from 'react';
import LearnerEnrollmentForm from './LearnerEnrollmentForm';
import LearnerDisplay from './LearnerDisplay';

function App() {
  const [learnerRecords, setLearnerRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    const simulateApiFetch = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };
    simulateApiFetch();
  }, []);

  const registerLearner = (newLearner) => {
    // Requirement: ES6 Spread operator to update state 
    setLearnerRecords([...learnerRecords, newLearner]);
    setCounter(counter + 1); // Event Handling: Button click counter [cite: 34]
  };

  
  const adultLearners = learnerRecords.filter(learner => learner.age >= 20);

  return (
    <div style={{ padding: '30px' }}>
      <h2>CodeCraze Student Management System</h2>
      <p>Total Submissions: {counter}</p>

      {loading ? <p>Loading data...</p> : (
        <>
          <LearnerEnrollmentForm onAddLearner={registerLearner} />
          
          <div style={{ display: 'flex', gap: '40px' }}>
            <LearnerDisplay 
              dataList={learnerRecords} 
              listTitle="All Enrolled Students" 
            />
            <LearnerDisplay 
              dataList={adultLearners} 
              listTitle="Adult Students (Age 20+)" 
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
