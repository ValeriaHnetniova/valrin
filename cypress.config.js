const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5175/', // або URL твоєї dev-версії
    setupNodeEvents(on, config) {
      // можна додати кастомні плагіни, логіку, слухачі подій
    },
    specPattern: 'cypress/e2e/example.cy.js', // де шукати тести
    supportFile: 'cypress/support/e2e.js'
  },
  video: false, // вимкнути запис відео тестів (опційно)
})