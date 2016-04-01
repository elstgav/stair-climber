export default {
  host:     process.env.HOST || 'localhost',
  port:     process.env.PORT || 8080,
  apiUrl:   `http://${process.env.API_URL || 'step-up-api.dev'}`,
  app: {
    name: 'StepUp',
    head: {
      title: 'StepUp',
      titleTemplate: 'StepUp - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Track your stair climbing at Avvo.' }
      ]
    }
  }
}
