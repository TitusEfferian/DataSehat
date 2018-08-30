import React from 'react'
import './style.css'
import {connect} from 'react-redux'
import {browserHistory, Link} from 'react-router'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import CircularProgress from '@material-ui/core/CircularProgress'

class MedicalResult extends React.Component {
  componentWillMount () {
    if (this.props.data === undefined) {
      browserHistory.push('/login')
    }
  }

  componentDidMount() {
    if (this.props.postLogin.data !== undefined) {
      this.props.dispatch({type: 'REQUEST_ACCOUNT_DETAIL', payload: {'Authorization': this.props.postLogin.data.token}})
    }
  }

  timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let year = a.getFullYear()
    let month = months[a.getMonth()]
    let date = a.getDate()
    let hour = a.getHours()
    let min = a.getMinutes()
    let sec = a.getSeconds()
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
    return time
  }

  _logout = () => {
    browserHistory.push('/')
  }

  render() {
    if (this.props.recordValue !== undefined) {
      return (
        <div className='container'>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Atribut</TableCell>
                  <TableCell>Nilai</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Albumin
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.albumin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Blood Group
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.blood_group}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Chest X-Ray
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.chest_x_ray}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Ears
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.ears}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Eyes
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.eyes}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Haemoglobin
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.haemoglobin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Heart
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.heart}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Height
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.height}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Lungs
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.lungs}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Nose
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.nose}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Sugar
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.sugar}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Skin
                  </TableCell>
                  <TableCell>{this.props.recordValue.data.data.record.skin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Time
                  </TableCell>
                  <TableCell>{this.timeConverter(this.props.recordValue.data.data.record.timestamp)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Link to='/input_record'>
            <Button variant="contained" color="primary" className='mr-50'>
              New Record
              <CloudUploadIcon />
            </Button>
          </Link>

          <Button variant="contained" color="secondary" className='mr-50' onClick={this._logout}>
           Logout
          </Button>
        </div>
      )
    }

    return (
      <div>
        <CircularProgress size={50} />
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    data: state.postLoginReducer.data,
    recordValue: state.viewAccount.data,
    postLogin: state.postLoginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalResult)