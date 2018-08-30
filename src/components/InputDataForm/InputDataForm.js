import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import './styles.css'



class InputDataForm extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (<form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='albumin'
                     component='input'
                     type='text'
                     placeholder='Albumin' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='blood_group'
                     component='input'
                     type='text'
                     placeholder='Blood Group' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='blood_presure'
                     component='input'
                     type='text'
                     placeholder='Blood Pressure' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='chest_x_ray'
                     component='input'
                     type='text'
                     placeholder='Chest X-Ray' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='ears'
                     component='input'
                     type='text'
                     placeholder='Ears' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='eyes'
                     component='input'
                     type='text'
                     placeholder='Eyes' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='haemoglobin'
                     component='input'
                     type='text'
                     placeholder='Haemoglobin' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='heart'
                     component='input'
                     type='text'
                     placeholder='Heart' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='height'
                     component='input'
                     type='text'
                     placeholder='Height' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='lungs'
                     component='input'
                     type='text'
                     placeholder='Lungs' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='nose'
                     component='input'
                     type='text'
                     placeholder='Nose' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='sugar'
                     component='input'
                     type='text'
                     placeholder='Sugar' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <label htmlFor='text-field' className='text-field'>
              <Field name='skin'
                     component='input'
                     type='text'
                     placeholder='Skin' />
              <span className='field-label' />
              <span className='field-border' />
            </label>
          </div>
        </div>
        <div className='row pd-15'>
          <div className='col-sm-12 col-md-12'>
            <Button variant="contained" color="primary" size='large' aria-label='Submit' type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>)
  }
}

export default reduxForm({
  form: 'inputData'
})(InputDataForm)