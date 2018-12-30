import React from 'react';
import VideoItem from './VideoItem';


class VideoList extends React.Component {
    returnVideoItem() {
        const VIDEOITEM = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;
        const renderedList = VIDEOITEM.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
        });
        return renderedList;
    }
    render() {
        return (
            <div className="ui relaxed divided list">
                {this.returnVideoItem()}
            </div>
        );
    }
}

export default VideoList;