import React from 'react'
import {requestAccountDetail} from './redux/actions/viewAccount'
import {connect} from 'react-redux'

class Main extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="box" onClick={() => {
          this.props.requestAccountDetail()
        }}></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    testState: state.viewAccount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestAccountDetail: () => dispatch(requestAccountDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)