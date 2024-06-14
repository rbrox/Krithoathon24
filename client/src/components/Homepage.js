import React, { useState } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
    const [placeName, setPlaceName] = useState('');
    const [language, setLanguage] = useState('en');
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/locations/${placeName}?language=${language}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>AI-Based Location History Application</h1>
            <input
                type="text"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
                placeholder="Enter a place name"
            />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                {/* Add more languages as needed */}
            </select>
            <button onClick={fetchData}>Fetch Data</button>

            {data && (
                <div>
                    <h2>Timeline</h2>
                    <p>{data.timeline}</p>
                    <h2>Description</h2>
                    <p>{data.description}</p>
                </div>
            )}

            <MapComponent placeName={placeName} />
        </div>
    );
};

export default HomePage;
