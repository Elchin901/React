import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/employees`)
      .then(response => setEmployees(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.ID}>{employee.FullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
