const logError = (error: any) => {
    console.error('LoggingService: ', error);
    // Add logic to send error to a logging server or service
};

const logInfo = (message: string) => {
    console.info('LoggingService: ', message);
    // Add logic to send info to a logging server or service
};

export { logError, logInfo };