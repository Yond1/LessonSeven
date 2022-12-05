import React from 'react'
import { NewOrPopular } from './../hoc/NewOrPopular';

const Video = ({ title, url, views }) => {
    return (
        <div className="item item-video">
            <iframe
                title={title}
                src={url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    );
}

export default NewOrPopular(Video)