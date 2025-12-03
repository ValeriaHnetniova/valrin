import { defineConfig } from "cypress";
import task from "@cypress/code-coverage/task";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
  },

  e2e: {
    viewportWidth: 1920, 
    viewportHeight: 1080, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
