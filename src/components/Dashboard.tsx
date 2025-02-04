import React, { useState, useEffect, useCallback } from 'react';
import Metrics, { MetricsType } from './Metrics';
import DataCollectionForm from './DataCollectionForm';
import TimeSeriesChart from './TimeSeriesChart';
import FilterPanel from './FilterPanel';
import Statistics from './Statistics';
import MapView from './MapView';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot';
import RadarChart from './RadarChart';
import BubbleChart from './BubbleChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import Histogram from './Histogram';
import BoxPlot from './BoxPlot';
import Heatmap from './Heatmap';
import ChoroplethMap from './ChoroplethMap';
import { useAuth } from '../context/AuthContext';
import { fetchReefData, fetchMetrics, submitData } from '../services/api';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const [metricsData, setMetricsData] = useState<MetricsType | null>(null);
    const [reefData, setReefData] = useState<any[]>([]);
    const [widgets, setWidgets] = useState<string[]>([
        'metrics', 'dataForm', 'timeSeries', 'statistics', 'map', 'pieChart', 'scatterPlot', 'radarChart', 'bubbleChart', 'doughnutChart', 'lineChart', 'histogram', 'boxPlot', 'heatmap', 'choroplethMap'
    ]);
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

    const handleDataSubmit = useCallback(async (data: { coralSize: string; healthStatus: string }) => {
        const response = await submitData(data);
        console.log('Data submitted:', response);
        setMetricsData(response.metrics); // Assuming the response contains updated metrics
    }, []);

    const toggleWidget = useCallback((widget: string) => {
        setWidgets(prevWidgets =>
            prevWidgets.includes(widget)
                ? prevWidgets.filter(w => w !== widget)
                : [...prevWidgets, widget]
        );
    }, []);

    const handleFilterChange = useCallback((newFilters: { dateRange: [string, string]; location: string }) => {
        setFilters(newFilters);
        // Apply filters to data fetching logic
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Reef Data Dashboard</h1>
            {!isLoggedIn ? (
                <p>Please log in to view the dashboard.</p>
            ) : (
                <>
                    <div className="dashboard-controls">
                        <button onClick={() => toggleWidget('metrics')}>Toggle Metrics</button>
                        <button onClick={() => toggleWidget('dataForm')}>Toggle Data Form</button>
                        <button onClick={() => toggleWidget('timeSeries')}>Toggle Time Series</button>
                        <button onClick={() => toggleWidget('statistics')}>Toggle Statistics</button>
                        <button onClick={() => toggleWidget('map')}>Toggle Map</button>
                        <button onClick={() => toggleWidget('pieChart')}>Toggle Pie Chart</button>
                        <button onClick={() => toggleWidget('scatterPlot')}>Toggle Scatter Plot</button>
                        <button onClick={() => toggleWidget('radarChart')}>Toggle Radar Chart</button>
                        <button onClick={() => toggleWidget('bubbleChart')}>Toggle Bubble Chart</button>
                        <button onClick={() => toggleWidget('doughnutChart')}>Toggle Doughnut Chart</button>
                        <button onClick={() => toggleWidget('lineChart')}>Toggle Line Chart</button>
                        <button onClick={() => toggleWidget('histogram')}>Toggle Histogram</button>
                        <button onClick={() => toggleWidget('boxPlot')}>Toggle Box Plot</button>
                        <button onClick={() => toggleWidget('heatmap')}>Toggle Heatmap</button>
                        <button onClick={() => toggleWidget('choroplethMap')}>Toggle Choropleth Map</button>
                    </div>
                    <FilterPanel onFilterChange={handleFilterChange} />
                    <div className="dashboard-widgets">
                        {widgets.includes('metrics') && metricsData && <Metrics data={metricsData} />}
                        {widgets.includes('dataForm') && <DataCollectionForm onSubmit={handleDataSubmit} />}
                        {widgets.includes('timeSeries') && <TimeSeriesChart data={reefData} />}
                        {widgets.includes('statistics') && metricsData && (
                            <Statistics
                                totalFishSpecies={metricsData.totalFishSpecies}
                                averageCoralCoverage={metricsData.averageCoralCoverage}
                                averageWaterTemperature={metricsData.averageWaterTemperature}
                                labels={metricsData.labels}
                                data={metricsData.data}
                            />
                        )}
                        {widgets.includes('map') && <MapView locations={reefData.map(d => ({ lat: d.lat, lng: d.lng, name: d.name }))} />}
                        {widgets.includes('pieChart') && metricsData && <PieChart data={{ labels: metricsData.labels, values: metricsData.data }} />}
                        {widgets.includes('scatterPlot') && <ScatterPlot data={reefData.map(d => ({ x: d.lat, y: d.lng }))} />}
                        {widgets.includes('radarChart') && metricsData && <RadarChart data={{ labels: metricsData.labels, values: metricsData.data }} />}
                        {widgets.includes('bubbleChart') && <BubbleChart data={reefData.map(d => ({ x: d.lat, y: d.lng, r: d.coralSize }))} />}
                        {widgets.includes('doughnutChart') && metricsData && <DoughnutChart data={{ labels: metricsData.labels, values: metricsData.data }} />}
                        {widgets.includes('lineChart') && metricsData && <LineChart data={{ labels: metricsData.labels, values: metricsData.data }} />}
                        {widgets.includes('histogram') && metricsData && <Histogram data={{ labels: metricsData.labels, values: metricsData.data }} />}
                        {widgets.includes('boxPlot') && metricsData && <BoxPlot data={{ labels: metricsData.labels, values: metricsData.data.map(value => [value]) }} />}
                        {widgets.includes('heatmap') && <Heatmap data={reefData.map(d => ({ lat: d.lat, lng: d.lng, intensity: d.coralSize }))} />}
                        {widgets.includes('choroplethMap') && <ChoroplethMap regions={reefData.map(d => ({ name: d.name, coordinates: [[d.lat, d.lng]], value: d.coralSize }))} />}
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;