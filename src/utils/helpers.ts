/**
 * Formats a date to a readable string.
 * @param date - The date to format.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US');
};

/**
 * Calculates the percentage of a part relative to a total.
 * @param part - The part value.
 * @param total - The total value.
 * @returns The calculated percentage.
 */
export const calculatePercentage = (part: number, total: number): number => {
    if (total === 0) return 0;
    return (part / total) * 100;
};

/**
 * Parses metrics data and formats the date.
 * @param data - The raw data array.
 * @returns The parsed data array.
 */
export const parseMetricsData = (data: any[]): any[] => {
    return data.map(item => ({
        id: item.id,
        value: item.value,
        date: formatDate(new Date(item.date)),
    }));
};

/**
 * Validates the data input.
 * @param input - The input data to validate.
 * @returns True if the input is valid, false otherwise.
 */
export const validateDataInput = (input: any): boolean => {
    // Add validation logic as needed
    return input && typeof input.value === 'number';
};