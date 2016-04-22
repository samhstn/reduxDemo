import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAge } from '../actions/index.js'

class App extends Component {
  componentWillMount() {
    this.props.changeAge()
  }

  render() {
    console.log(this.props.age, '<<<<this.props.age')
    if(this.props.age){
      return (
        <div>New</div>
      )
    } else {
      return (
        <div>Old</div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({changeAge}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
