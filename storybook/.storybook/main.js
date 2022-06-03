module.exports = {
  stories: ['../src/**/*.stories.@(js)'],
  addons: [
    {
      name: "storybook-addon-turbo-build",
      disableSourceMap: true,
      options: {
        optimizationLevel: 1,
      },
    },
  ],
}
