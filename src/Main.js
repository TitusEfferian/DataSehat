import React from 'react';
import { buttonPlusClicked } from "./redux/actions/buttonClicked";
import { connect } from "react-redux";
class Main extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <div className="box" onClick={() => { this.props.buttonClicked() }}></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        testState: state.buttonClicked
    }
}
function mapDispatchToProps(dispatch) {
    return {
        buttonClicked: () => dispatch(buttonPlusClicked())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);