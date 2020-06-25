import React from 'react';

import VideoItem from './VideoItem';

import { Grid } from '@material-ui/core';

const VideoList = ({ videos }) => {
    const videoItems = videos.map((video, id) => <VideoItem key={id} video={video} />);
    return (
        <h1>{videoItems}</h1>
    );
}

export default VideoList