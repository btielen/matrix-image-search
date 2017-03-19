import React from 'react'
import { connect } from 'react-redux'
import { queryNow} from '../actions'

let QueryButton = ({disabled, onClick}) => (
    <button disabled={disabled} onClick={() => onClick()} className="query-button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
);

const mapStateToProps = (state) => {

    // First check if there are horizontal and vertical search inputs
    let valid = state.horizontalFields.length > 0 && state.verticalFields.length > 0

    // Check for every search input fields if they are valid
    for(let field of Object.values(state.fields)) {
        if(!field.valid){
            valid = false
            break
        }
    }

    return { disabled: !valid }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => { dispatch(queryNow())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryButton)