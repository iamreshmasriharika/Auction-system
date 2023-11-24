import React from 'react';

const AboutUs = ({ darkMode }) => {
  const teamMembers = [
    { name: 'Sahil Borse', roll: '21BCE8163' },
    { name: 'Reshma Sri Harika', roll: '21BCE9067' },
    { name: 'Sai Divya', roll: '21BCE9199' },
    { name: 'Vishnu Priya', roll: '21BCE9636'},
    { name: 'Amrutha', roll: '21BCE9855' },
  ];

  const githubLink = 'https://github.com/hriday-sehgal/BidBot-Online-Auction-System-Project-Frontend';

  return (
    <div className={`container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`card ${darkMode ? 'text-light bg-dark' : ''}`}>
        <div className="card-body">
          
          <h4 className={`card-subtitle mb-3 ${darkMode ? 'text-light' : ''}`}>Team Members:</h4>
          <ul className={`list-group ${darkMode ? 'list-group-flush' : ''}`}>
            {teamMembers.map((member) => (
              <li key={member.roll} className={`list-group-item ${darkMode ? 'bg-dark text-light' : ''}`}>
                {member.name} ({member.roll}) -{' '}
                <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            ))}
          </ul>



          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
