import React from 'react'
import InputDataForm from './../../components/InputDataForm/InputDataForm'
import {connect} from 'react-redux'

class InputData extends React.Component {
  handleSubmit = (values) => {
    this.props.dispatch({type: 'ON_SUBMIT_INPUT_DATA', payload: values})
  }

  render() {
    return (<InputDataForm onSubmit={this.handleSubmit}/>)
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputData)