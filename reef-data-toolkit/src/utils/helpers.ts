export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US');
};

export const calculatePercentage = (part: number, total: number): number => {
    if (total === 0) return 0;
    return (part / total) * 100;
};

export const parseMetricsData = (data: any[]): any[] => {
    return data.map(item => ({
        id: item.id,
        value: item.value,
        date: formatDate(new Date(item.date)),
    }));
};

export const validateDataInput = (input: any): boolean => {
    // Add validation logic as needed
    return input && typeof input.value === 'number';
};