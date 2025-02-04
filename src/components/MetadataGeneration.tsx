import React, { useState } from 'react';

const MetadataGeneration: React.FC = () => {
    const [creator, setCreator] = useState('');
    const [content, setContent] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [location, setLocation] = useState('');
    const [collectionMethod, setCollectionMethod] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle metadata generation submission
        console.log('Metadata Generation Submitted:', { creator, content, dateCreated, location, collectionMethod, purpose });
    };

    return (
        <div>
            <h2>Metadata Generation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Creator:
                    <input type="text" value={creator} onChange={(e) => setCreator(e.target.value)} />
                </label>
                <label>
                    Content:
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </label>
                <label>
                    Date Created:
                    <input type="date" value={dateCreated} onChange={(e) => setDateCreated(e.target.value)} />
                </label>
                <label>
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label>
                    Collection Method:
                    <textarea value={collectionMethod} onChange={(e) => setCollectionMethod(e.target.value)} />
                </label>
                <label>
                    Purpose:
                    <textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MetadataGeneration;