import React, { useState } from 'react';

const DataCollectionForm: React.FC = () => {
    const [data, setData] = useState({
        coralSize: '',
        healthStatus: '',
        growthRate: '',
        speciesIdentification: '',
        fishCount: '',
        invertebrateCount: '',
        behaviorObservations: '',
        temperature: '',
        pH: '',
        salinity: '',
        nitrates: '',
        phosphates: '',
        latitude: '',
        longitude: '',
        habitatType: '',
        habitatChanges: '',
        humanImpact: '',
        naturalImpact: '',
        restorationProjects: '',
        successRates: '',
        conservationStrategies: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add API call to submit data here
        console.log('Data submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Coral Health and Growth</h2>
            <div>
                <label>
                    Coral Size:
                    <input
                        type="text"
                        name="coralSize"
                        value={data.coralSize}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Health Status:
                    <input
                        type="text"
                        name="healthStatus"
                        value={data.healthStatus}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Growth Rate:
                    <input
                        type="text"
                        name="growthRate"
                        value={data.growthRate}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h2>Marine Life Monitoring</h2>
            <div>
                <label>
                    Species Identification:
                    <input
                        type="text"
                        name="speciesIdentification"
                        value={data.speciesIdentification}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Fish Count:
                    <input
                        type="text"
                        name="fishCount"
                        value={data.fishCount}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Invertebrate Count:
                    <input
                        type="text"
                        name="invertebrateCount"
                        value={data.invertebrateCount}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Behavior Observations:
                    <textarea
                        name="behaviorObservations"
                        value={data.behaviorObservations}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h2>Water Quality Parameters</h2>
            <div>
                <label>
                    Temperature:
                    <input
                        type="text"
                        name="temperature"
                        value={data.temperature}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    pH:
                    <input
                        type="text"
                        name="pH"
                        value={data.pH}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Salinity:
                    <input
                        type="text"
                        name="salinity"
                        value={data.salinity}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Nitrates:
                    <input
                        type="text"
                        name="nitrates"
                        value={data.nitrates}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Phosphates:
                    <input
                        type="text"
                        name="phosphates"
                        value={data.phosphates}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h2>Habitat Mapping</h2>
            <div>
                <label>
                    Latitude:
                    <input
                        type="text"
                        name="latitude"
                        value={data.latitude}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Longitude:
                    <input
                        type="text"
                        name="longitude"
                        value={data.longitude}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Habitat Type:
                    <input
                        type="text"
                        name="habitatType"
                        value={data.habitatType}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Habitat Changes:
                    <textarea
                        name="habitatChanges"
                        value={data.habitatChanges}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h2>Environmental Impact Assessments</h2>
            <div>
                <label>
                    Human Impact:
                    <textarea
                        name="humanImpact"
                        value={data.humanImpact}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Natural Impact:
                    <textarea
                        name="naturalImpact"
                        value={data.naturalImpact}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h2>Restoration and Conservation Efforts</h2>
            <div>
                <label>
                    Restoration Projects:
                    <textarea
                        name="restorationProjects"
                        value={data.restorationProjects}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Success Rates:
                    <textarea
                        name="successRates"
                        value={data.successRates}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Conservation Strategies:
                    <textarea
                        name="conservationStrategies"
                        value={data.conservationStrategies}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <button type="submit">Submit Data</button>
        </form>
    );
};

export default DataCollectionForm;