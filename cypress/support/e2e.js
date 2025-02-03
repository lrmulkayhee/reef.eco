Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore all uncaught exceptions
    return false;
});