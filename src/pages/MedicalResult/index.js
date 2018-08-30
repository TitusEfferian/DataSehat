import React from 'react';
import './style.css'
import { connect } from 'react-redux'

class MedicalResult extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'REQUEST_ACCOUNT_DETAIL', payload: { "Authorization": this.props.postLogin.data.token } })
    }
    render() {
        if(this.props.recordValue !== undefined){
            console.log(this.props.recordValue.data)
            return(
                <div>
                    <div>albumin:{this.props.recordValue.data.data.record.albumin}</div>
                    <div>blood_group:{this.props.recordValue.data.data.blood_group}</div>
                    <div>chest:{this.props.recordValue.data.data.record.chest_x_ray}</div>
                    <div>ears:{this.props.recordValue.data.data.record.ears}</div>
                    <div>eyes:{this.props.recordValue.data.data.record.eyes}</div>
                    <div>haemoglobin:{this.props.recordValue.data.data.record.haemoglobin}</div>
                    <div>heart:{this.props.recordValue.data.data.record.heart}</div>
                    <div>height:{this.props.recordValue.data.data.record.height}</div>
                    <div>lungs:{this.props.recordValue.data.data.record.lungs}</div>
                    <div>nose:{this.props.recordValue.data.data.record.nose}</div>
                    <div>sugar:{this.props.recordValue.data.data.record.sugar}</div>
                    <div>skin:{this.props.recordValue.data.data.record.skin}</div>
                    <div>hash:{this.props.recordValue.data.data.record.hash}</div>
                    <div>timestamp:{this.props.recordValue.data.data.record.timestamp}</div>



                </div>
            )
        }
        const data = [
            {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            }, {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            }, {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            , {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            , {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            , {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            , {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
            , {
                "height": "190",
                "lungs": "yes",
                "sugar": "12",
                "heart": "sdf",
                "skin": "black",
            },
        ]
        // if (this.props.recordValue.data.data.record != undefined) {
        //     return (
        //         this.props.recordValue.data.data.record.map((values) => {
        //             return (
        //                 <div>
        //                     <div>Height:{values.albumin}</div>

        //                     <br></br>
        //                 </div>
        //             )
        //         })
        //     )

        // }

        return (
            <div>
                loading
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
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