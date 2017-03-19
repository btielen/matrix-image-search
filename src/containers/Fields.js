import React, { PropTypes } from 'react'
import { addField, updateField } from '../actions'

const Fields = ({dispatch, fields, dimension, className}) => (
    <div className={className}>
        {fields.map(field =>  {
            let input

            return (
                <div key={field.id}><input ref={ node => {input = node}} type="text" value={field.term} onChange={() => dispatch(updateField(field.id, input.value))} /></div>
            )}
        )}

        <div className="tile">
            <button onClick={() => dispatch(addField(dimension))} className="addButton"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
        </div>
    </div>
)

Fields.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        term: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default Fields