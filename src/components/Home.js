import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
  return (
    <div>
      <h1> ini Home </h1>
      { JSON.stringify(props.listPassword) }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    listPassword: state.passwordManager.passwordStore
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
