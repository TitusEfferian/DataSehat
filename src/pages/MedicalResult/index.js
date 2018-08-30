import React from 'react';
import './style.css'

class MedicalResult extends React.Component {
    render() {
        const data = [
            {
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            {
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            ,{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            ,{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            ,{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            ,{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            ,{
                "height": "190",
                "lungs": "yes",
                "sugar":"12",
                "heart":"sdf",
                "skin":"black",
            },
            
        ]
        return (
            data.map((values) => {
                return (
                    <div>
                        <div>Height:{values.height}</div>
                        <div>lungs:{values.lungs}</div>
                        <div>sugar:{values.sugar}</div>
                        <div>heart:{values.heart}</div>
                        <div>skin:{values.skin}</div>
                        <br></br>

                    </div>
                )
            })
        )
    }
}
export default MedicalResult