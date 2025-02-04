/**
 * Validates the data input.
 * @param input - The input data to validate.
 * @returns True if the input is valid, false otherwise.
 */
interface DataInput {
    value: number;
}

export const validateDataInput = (input: DataInput): boolean => {
    return input && typeof input.value === 'number';
};

/**
 * Validates form data to ensure all fields are non-empty.
 * @param data - The form data to validate.
 * @returns True if all fields are non-empty, false otherwise.
 */
export const validateFormData = (data: { [key: string]: any }): boolean => {
    return Object.values(data).every(value => typeof value === 'string' && value.trim() !== '');
};

/**
 * Validates an email address.
 * @param email - The email address to validate.
 * @returns True if the email is valid, false otherwise.
 */
export const validateEmail = (email: string): boolean => {
    const re = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    );
    return re.test(email);
};

/**
 * Validates a required field.
 * @param value - The value to validate.
 */
export const validateRequired = (value: any): boolean => {
    return typeof value === 'string' && value.trim() !== '';
};
