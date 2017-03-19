import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumbnail'
import { thumbnailClicked } from '../actions'

const Queries = ({queries, width, onThumbnailClicked}) => (
    <div className="queries" style={{ width: width*100  }}>

        {Object.values(queries).map(
            (query) => (
                <Thumbnail key={query.id} urls={query.urls} selected={query.selected} isFetching={query.isFetching} onThumbnailClicked={onThumbnailClicked} queryId={query.id} />
            )
        )}

    </div>
)

const mapStateToProps = (state) => {
    return {
        queries: state.queries,
        width: state.horizontalFields.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onThumbnailClicked: (id) => { dispatch(thumbnailClicked(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Queries)