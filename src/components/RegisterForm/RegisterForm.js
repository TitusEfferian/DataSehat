import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import './styles.css'

class RegisterForm extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (<form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='ktp'
                     component='input'
                     type='text'
                     placeholder='KTP Number' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='name'
                     component='input'
                     type='text'
                     placeholder='Name' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='password'
                     component='input'
                     type='password'
                     placeholder='Your password' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <Button variant="contained" color="primary" size='large' aria-label='Register' type='submit'>
              Register
            </Button>
          </div>
        </div>
      </div>
    </form>)
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm)