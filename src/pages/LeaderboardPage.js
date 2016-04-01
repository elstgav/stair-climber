import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as leaderboardActionCreators from '_/src/actions/leaderboard'

import Helmet from 'react-helmet'

import {
  Leaderboard
} from '_/src/components'


const LeaderboardPage = React.createClass({
  componentWillMount() {
    this.props.fetchLeaderboard()
  },

  render() {
    return (
      <div>
        <Helmet title='Leaderboard'/>
        <h1>StepUp</h1>
        <Leaderboard leaders={this.props.leaders}/>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    leaders: state.leaderboard.records
  }
}

function mapDispatchToProps(dispatch) {
  return {
    leaderboardActions: bindActionCreators(leaderboardActionCreators, dispatch),
    fetchLeaderboard: () => dispatch(leaderboardActionCreators.fetchAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardPage)
