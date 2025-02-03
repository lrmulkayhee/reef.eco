import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/reef-data'; // Replace with your actual API base URL

export const fetchReefData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reef data:', error);
        throw error;
    }
};
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

interface UserProfile {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

export const submitReefData = async (data: ReefData): Promise<ReefData> => {
    try {
        const response = await axios.post<ReefData>(`${API_BASE_URL}/data`, data);
        return response.data;
    } catch (error) {
        console.error('Error submitting reef data:', error);
        throw error;
    }
};

export const fetchMetrics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/metrics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching metrics:', error);
        throw error;
    }
};

export const getUserProfile = async () => {
    const response = await axios.get('/api/user/profile');
    return response.data;
};