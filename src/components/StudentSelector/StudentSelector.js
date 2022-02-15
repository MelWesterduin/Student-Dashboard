import { NavLink } from 'react-router-dom';
import studentAssignments from '../data/assignment-gradings.json';
import studentProfiles from '../data/student-profiles.json';

import './StudentSelector.css';

const StudentSelector = ({ setProfile }) => {
  const names = studentAssignments.map(
    (studentAssignment) => studentAssignment.naam
  );
  const uniqueNames = [...new Set(names)];

  return (
    <div>
      <h3>Kies een student:</h3>
      <select>
        <option value=""></option>
        <option value="Alle studenten">Alle studenten</option>
        <option></option>
      </select>


      <div className="student-selector__student-list">
        <NavLink to="/"
        className="student-selector__all-students"
          onClick={() => {
            setProfile(undefined);
          }}
        >
          Alle studenten |{' '}
        </NavLink> 
        {uniqueNames.map((uniqueName) => (
          <NavLink to={`/${uniqueName}`}
            className="student-selector__student-names"
            key={uniqueName}
            onClick={() => {
              setProfile(
                studentProfiles.find(
                  (studentProfile) => uniqueName === studentProfile.first_name
                )
              );
            }}
          >
            {uniqueName} |
          </NavLink> 
        ))} 
      </div>
    </div>
  );
};

export default StudentSelector;
