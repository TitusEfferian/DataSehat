import React from 'react'
import { requestAccountDetail } from '../../redux/actions/viewAccount'
import { connect } from 'react-redux'
import './Main.css'
import { Link} from "react-router";

class Main extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="box"><Link to='/input_record'>Add Record</Link></div>
        <div className="bottom-navigation">
          <div className="login-button"><Link to="/login">login</Link></div>
          <div className="profile-button"><Link to="/register">register</Link></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('STATE: MAIN')
  console.log(state)
  return {
    testState: state.viewAccount,
    postLogin: state.postLoginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestAccountDetail: () => dispatch(requestAccountDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)