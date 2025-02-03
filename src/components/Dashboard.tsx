import React, { useState, useEffect } from 'react';
import Metrics, { MetricsType } from './Metrics';
import DataCollectionForm from './DataCollectionForm';
import TimeSeriesChart from './TimeSeriesChart';
import FilterPanel from './FilterPanel';
import { useAuth } from '../context/AuthContext';
import { fetchReefData, fetchMetrics, submitData } from '../services/api';

const Dashboard: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const [metricsData, setMetricsData] = useState<MetricsType | null>(null);
    const [reefData, setReefData] = useState<any[]>([]);
    const [widgets, setWidgets] = useState<string[]>(['metrics', 'dataForm', 'timeSeries']);
    const [filters, setFilters] = useState<{ dateRange: [string, string]; location: string }>({
        dateRange: ['', ''],
        location: '',
    });

    useEffect(() => {
        if (isLoggedIn) {
            fetchMetrics().then(data => setMetricsData(data));
            fetchReefData().then(data => setReefData(data));
        }
    }, [isLoggedIn]);

    const handleDataSubmit = async (data: { coralSize: string; healthStatus: string }) => {
        const response = await submitData(data);
        console.log('Data submitted:', response);
        setMetricsData(response.metrics); // Assuming the response contains updated metrics
    };

    const toggleWidget = (widget: string) => {
        setWidgets(prevWidgets =>
            prevWidgets.includes(widget)
                ? prevWidgets.filter(w => w !== widget)
                : [...prevWidgets, widget]
        );
    };

    const handleFilterChange = (newFilters: { dateRange: [string, string]; location: string }) => {
        setFilters(newFilters);
        // Apply filters to data fetching logic
    };

    return (
        <div>
            <h1>Reef Data Dashboard</h1>
            {!isLoggedIn ? (
                <p>Please log in to view the dashboard.</p>
            ) : (
                <>
                    <div>
                        <button onClick={() => toggleWidget('metrics')}>Toggle Metrics</button>
                        <button onClick={() => toggleWidget('dataForm')}>Toggle Data Form</button>
                        <button onClick={() => toggleWidget('timeSeries')}>Toggle Time Series</button>
                    </div>
                    <FilterPanel onFilterChange={handleFilterChange} />
                    {widgets.includes('metrics') && metricsData && <Metrics data={metricsData} />}
                    {widgets.includes('dataForm') && <DataCollectionForm onSubmit={handleDataSubmit} />}
                    {widgets.includes('timeSeries') && <TimeSeriesChart data={reefData} />}
                </>
            )}
        </div>
    );
};

export default Dashboard;