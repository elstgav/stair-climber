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
        { name: 'description', content: 'Track your stair climbing at Avvo.' }
      ],
      script: [
        {src: "/app.js", charSet: "UTF-8"},
        {src: "https://www.gstatic.com/firebasejs/3.1.0/firebase-app.js"},
        {src: "https://www.gstatic.com/firebasejs/3.1.0/firebase-auth.js"},
        {src: "https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"},
        {innerHTML: `
          var config = {
            apiKey: "AIzaSyBnjhh1f0kuds0q8bByqHymdtLe6junhic",
            authDomain: "stepup-e9532.firebaseapp.com",
            databaseURL: "https://stepup-e9532.firebaseio.com",
          };
            firebase.initializeApp(config);`
        }
      ]
    }
  }
}
