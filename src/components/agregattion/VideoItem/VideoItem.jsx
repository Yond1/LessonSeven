import React from 'react'
import DateTime from '../DateTime/DateTime';

export const VideoItem = (props) => {
    return (
        <div className="video">
            <iframe
                title='video'
                src={props.url}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
            <DateTime date={props.date} />
        </div>
    );
}