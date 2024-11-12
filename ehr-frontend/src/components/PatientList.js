import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null); // New state for error handling

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/patients');
                setPatients(response.data);
            } catch (error) {
                console.error("Error fetching patients:", error);
                setError("Failed to fetch patients.");
            }
        };
        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patient List</h1>
            {error && <p>{error}</p>} {/* Display error message if fetching fails */}
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.first_name} {patient.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
