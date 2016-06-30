export default {
  host:     process.env.HOST || 'http://localhost',
  port:     process.env.PORT || 8080,
  apiUrl:   process.env.API_URL || 'http://step-up-api.herokuapp.com/',
  app: {
    name: 'StepUp',
    head: {
      title: 'StepUp',
      titleTemplate: 'StepUp - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Track your stair climbing at Avvo.' },
      ],
    },
  },
}
