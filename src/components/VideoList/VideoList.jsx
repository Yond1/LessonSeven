import React from 'react'
import { VideoItem } from '../VideoItem/VideoItem'

export const VideoList = ({ list }) => {
    return (
        list.map((item) => <VideoItem key={item.url} url={item.url} date={item.date} />)
    )
}
