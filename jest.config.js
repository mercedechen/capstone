module.exports = {
  // If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
  // "moduleNameMapper" is used to map module paths to different paths, effectively allowing you to alias module imports during testing. This can be useful for mocking dependencies or simplifying module paths.
  moduleNameMapper: {
    // Matches all files inside the src directory
    // You can use variables like <rootDir> to refer to the root directory of your project. This is useful for making paths independent of the actual location of the project.
    "\\.css$": "identity-obj-proxy",
  },
};