import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);
    const [filterConfig, setFilterConfig] = useState("");

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:3001/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedEmployees = React.useMemo(() => {
        let sortableEmployees = [...employees];
        if (sortConfig !== null) {
            sortableEmployees.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableEmployees;
    }, [employees, sortConfig]);

    const filteredEmployees = sortedEmployees.filter(employee => 
        employee.fullName.toLowerCase().includes(filterConfig.toLowerCase())
    );

    return (
        <div>
            <h1>Employee List</h1>
            <input 
                type="text" 
                placeholder="Filter by name" 
                value={filterConfig}
                onChange={(e) => setFilterConfig(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('fullName')}>Name</th>
                        <th onClick={() => handleSort('subdivision')}>Subdivision</th>
                        <th onClick={() => handleSort('position')}>Position</th>
                        <th onClick={() => handleSort('status')}>Status</th>
                        <th onClick={() => handleSort('outOfOfficeBalance')}>Out of Office Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.fullName}</td>
                            <td>{employee.subdivision}</td>
                            <td>{employee.position}</td>
                            <td>{employee.status}</td>
                            <td>{employee.outOfOfficeBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;


