export default {
  host:     process.env.HOST || 'localhost',
  port:     process.env.PORT || 8080,
  app: {
    name: 'StairClimb',
    head: {
      title: 'StairClimb',
      titleTemplate: 'StairClimb - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Track your stair climbing at Avvo.' }
      ]
    }
  }
}
