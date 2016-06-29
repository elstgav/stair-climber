import React from 'react'
import Helmet from 'react-helmet'
import Config from 'src/config'


export default class extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var firebase = require("firebase/app");
    require("firebase/auth");
    require("firebase/database");
    var config = {
      apiKey: "AIzaSyBnjhh1f0kuds0q8bByqHymdtLe6junhic",
      authDomain: "stepup-e9532.firebaseapp.com",
      databaseURL: "https://stepup-e9532.firebaseio.com",
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div id='AppContainer'>
        <Helmet {...Config.app.head}/>
        { this.props.children }
      </div>
    )
  }
}
