import React from 'react'

const Thumbnail = ({queryId, isFetching, selected, urls, onThumbnailClicked}) => (
    <div className="thumb">
        {isFetching &&
            <span>Laden</span>
        }

        {!isFetching &&
            <img src={urls[selected]} alt="" onClick={() => onThumbnailClicked(queryId)}/>
        }


    </div>
)

export default Thumbnail