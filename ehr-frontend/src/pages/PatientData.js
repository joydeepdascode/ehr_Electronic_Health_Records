import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PatientData.css';

const PatientData = () => {
    const [patients, setPatients] = useState([]);
    const [userType, setUserType] = useState('client'); // Assume user type for demonstration

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/patients', { params: { userType } });
                setPatients(response.data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };
        fetchPatients();
    }, [userType]);

    return (
        <div>
            <h2>Patient Data</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name} - {patient.email} - {patient.health_record}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientData;
