const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder: "cypress/videos",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },
    // Gunakan baseUrl utama untuk YouTube
    baseUrl: "https://youtube.com",
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});
