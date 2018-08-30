import React from 'react'
import RegisterForm from './../../components/RegisterForm/RegisterForm'
import {connect} from 'react-redux'

class Register extends React.Component {
  handleSubmit = (values) => {
    this.props.dispatch({type: 'ON_SUBMIT_REGISTER', payload: values})
  }

  render() {
    return (<RegisterForm onSubmit={this.handleSubmit}/>)
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)