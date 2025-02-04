import React, { useState } from 'react';

const ProjectPlanning: React.FC = () => {
    const [objectives, setObjectives] = useState('');
    const [methodologies, setMethodologies] = useState('');
    const [schedule, setSchedule] = useState('');
    const [documentation, setDocumentation] = useState('');
    const [roles, setRoles] = useState('');
    const [budget, setBudget] = useState('');
    const [storage, setStorage] = useState('');
    const [access, setAccess] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle project planning submission
        console.log('Project Planning Submitted:', { objectives, methodologies, schedule, documentation, roles, budget, storage, access });
    };

    return (
        <div>
            <h2>Project Planning</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Objectives:
                    <textarea value={objectives} onChange={(e) => setObjectives(e.target.value)} />
                </label>
                <label>
                    Methodologies:
                    <textarea value={methodologies} onChange={(e) => setMethodologies(e.target.value)} />
                </label>
                <label>
                    Schedule:
                    <textarea value={schedule} onChange={(e) => setSchedule(e.target.value)} />
                </label>
                <label>
                    Documentation:
                    <textarea value={documentation} onChange={(e) => setDocumentation(e.target.value)} />
                </label>
                <label>
                    Roles and Responsibilities:
                    <textarea value={roles} onChange={(e) => setRoles(e.target.value)} />
                </label>
                <label>
                    Budget:
                    <textarea value={budget} onChange={(e) => setBudget(e.target.value)} />
                </label>
                <label>
                    Storage and Preservation:
                    <textarea value={storage} onChange={(e) => setStorage(e.target.value)} />
                </label>
                <label>
                    Access, Sharing, Use Plans and Policies:
                    <textarea value={access} onChange={(e) => setAccess(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProjectPlanning;