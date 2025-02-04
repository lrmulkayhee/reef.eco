const trackEvent = (event: string, data: any) => {
    console.log('AnalyticsService: ', event, data);
    // Add logic to send event data to an analytics server or service
};

export { trackEvent };