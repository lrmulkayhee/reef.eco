import React, { useState } from 'react';

interface FilterPanelProps {
    onFilterChange: (filters: { dateRange: [string, string]; location: string }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
    const [dateRange, setDateRange] = useState<[string, string]>(['', '']);
    const [location, setLocation] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ dateRange, location });
    };

    return (
        <div>
            <h3>Filters</h3>
            <label>
                Date Range:
                <input
                    type="date"
                    value={dateRange[0]}
                    onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
                />
                <input
                    type="date"
                    value={dateRange[1]}
                    onChange={(e) => setDateRange([dateRange[0], e.target.value])}
                />
            </label>
            <label>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </label>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default FilterPanel;