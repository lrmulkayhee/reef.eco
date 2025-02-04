export const validateDataInput = (input: any): boolean => {
    return input && typeof input.value === 'number';
};

export const validateFormData = (data: { [key: string]: string }): boolean => {
    return Object.values(data).every(value => value.trim() !== '');
};