import React from 'react'
import InputDataForm from './../../components/InputDataForm/InputDataForm'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class InputData extends React.Component {
  componentWillMount () {
    if (this.props.data === undefined) {
      browserHistory.push('/login')
    }
  }

  handleSubmit = (values) => {
    const token = this.props.data.token
    this.props.dispatch({type: 'ON_SUBMIT_INPUT_DATA', payload: {values, token}})
  }

  render() {
    return (<InputDataForm onSubmit={this.handleSubmit}/>)
  }
}

function mapStateToProps (state) {
  console.log('STATE')
  console.log(state)
  return {
    data: state.postLoginReducer.data
  }
}

function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputData)