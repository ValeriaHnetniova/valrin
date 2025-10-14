Cypress.on("uncaught:exception", (err, runnable) => {
  // щоб тести не падали через необроблені винятки на сайті
  return false;
});
