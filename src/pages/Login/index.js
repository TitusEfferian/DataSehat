import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { postLogin } from "../../redux/actions/login";
import {Link} from 'react-router'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ktp: null,
            password: null,
        }
        this.handleChangeKtp = this.handleChangeKtp.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    handleChangeKtp(event) {
        this.setState({ ktp: event.target.value })
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        console.log(this.state)
        console.log(this.props.postLoginSuccess)
        return (
            <div>
                <div>
                    <label>ktp:</label>
                    <input type="text" value={this.state.ktp} onChange={this.handleChangeKtp}></input>
                </div>
                <div>
                    <label>password:</label>
                    <input type="text" value={this.state.password} onChange={this.handleChangePassword}></input>
                </div>
                <div>
                    <input type="submit" onClick={() => { this.props.dispatch({type:'POST_LOGIN',payload:{"ktp":this.state.ktp,"password":this.state.password}}) }}></input>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        postLoginSuccess: state.postLoginReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)