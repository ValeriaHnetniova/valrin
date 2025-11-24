import { defineConfig } from "cypress";
import task from '@cypress/code-coverage/task';

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
});
