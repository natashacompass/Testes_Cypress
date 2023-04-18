const { defineConfig } = require("cypress");

//baseURL: 'https://alura-fotos.herokuapp.com/#/home'

module.exports = defineConfig({
  projectId: 'c9111a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
