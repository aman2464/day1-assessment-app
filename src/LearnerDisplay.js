import React from 'react';

const LearnerDisplay = ({ dataList, listTitle }) => {
  return (
    <div>
      <h3>{listTitle}</h3>
      {dataList.length === 0 ? <p>No records found.</p> : (
        <ul>
          {dataList.map((item) => (
            <li key={item.id}>
              {item.fullName} - {item.age} years - {item.subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LearnerDisplay;