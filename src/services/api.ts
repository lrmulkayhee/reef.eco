import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/reef-data'; // Replace with your actual API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define the structure of the reef data here
interface ReefData {
    id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    coralCoverage: number;
    fishSpecies: string[];
    waterTemperature: number;
    lastSurveyed: string; // ISO date string
}

interface Metrics {
    totalReefs: number;
    averageCoralCoverage: number;
    averageWaterTemperature: number;
    totalFishSpecies: number;
    lastUpdated: string; // ISO date string
}

// Define the MetricsType interface

export interface MetricsType {

    averageCoralCoverage: number;

    averageWaterTemperature: number;

    totalFishSpecies: number;

    totalReefs: number; // Added totalReefs property

    labels: string[];

    data: number[];

}

// Fetch reef data
export const fetchReefData = async (): Promise<ReefData[]> => {
    try {
        const response = await api.get('/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching reef data:', error);
        throw error;
    }
};

// Fetch metrics
export const fetchMetrics = async (): Promise<MetricsType> => {
    try {
        const response = await api.get('/metrics');
        const metrics: Metrics = response.data;

        // Transform the metrics data to match the MetricsType interface
        const metricsData: MetricsType = {
            averageCoralCoverage: metrics.averageCoralCoverage,
            averageWaterTemperature: metrics.averageWaterTemperature,
            totalFishSpecies: metrics.totalFishSpecies,
            totalReefs: metrics.totalReefs,
            labels: ['Total Reefs', 'Average Coral Coverage', 'Average Water Temperature', 'Total Fish Species'],
            data: [
                metrics.totalReefs,
                metrics.averageCoralCoverage,
                metrics.averageWaterTemperature,
                metrics.totalFishSpecies,
            ],
        };

        return metricsData;
    } catch (error) {
        console.error('Error fetching metrics:', error);
        throw error;
    }
};

// Submit new reef data
interface DataSubmission {
    coralSize: string;
    healthStatus: string;
}

export const submitData = async (data: DataSubmission) => {
    try {
        const response = await api.post('/data/submit', data);
        return response.data;
    } catch (error) {
        console.error('Error submitting data:', error);
        throw error;
    }
};

export default api;