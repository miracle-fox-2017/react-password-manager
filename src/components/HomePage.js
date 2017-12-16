import React, { Component } from 'react'
import { connect } from 'react-redux'

const HomePage = (props) => {
  return (
    <h1>{JSON.stringify(props.users)}</h1>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.homeReducers.users
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)