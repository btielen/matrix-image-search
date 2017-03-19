import { connect } from 'react-redux'
import Fields from './Fields'


const mapStateToProps = (state) => {
    return {
        dimension: 2,
        className: 'horizontal-fields',
        fields: Object.values(state.fields).filter((field) => state.horizontalFields.includes(field.id))
    }
}

export default connect(mapStateToProps)(Fields)