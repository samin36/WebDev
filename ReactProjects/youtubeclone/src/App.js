import React from 'react';

import { Grid } from '@material-ui/core';

import fetchData from './api/fetch';

import { SearchBar, VideoDetail, VideoList } from './components';


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchQuery) => {
        const response = await fetchData(searchQuery);
        for (let video of response.data.items) {
            if (video.id.videoId) {
                this.setState({ videos: response.data.items, selectedVideo: video });
                break;
            }
            this.setState({ videos: response.data.items, selectedVideo: video });
        }
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;