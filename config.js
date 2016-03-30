export default {
  host:     process.env.HOST || 'localhost',
  port:     process.env.PORT || 8080,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/stair-climber',
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
