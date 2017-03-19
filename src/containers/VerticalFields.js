import { connect } from 'react-redux'
import Fields from './Fields'


const mapStateToProps = (state) => {
    return {
        dimension: 1,
        className: 'vertical-fields',
        fields: Object.values(state.fields).filter((field) => state.verticalFields.includes(field.id))
    }
}

export default connect(mapStateToProps)(Fields)