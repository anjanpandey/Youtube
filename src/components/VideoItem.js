import './VideoItem.css';
import React from 'react';



class VideoItem extends React.Component {
    formatDate(item) {
        return new Date(item).toLocaleString();
    }
    render() {
        const VIDEO = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        return (
            <div className="video-item item" onClick={() => onVideoSelect(VIDEO)}>
                <img className="ui image" alt={VIDEO.snippet.description}
                     src={VIDEO.snippet.thumbnails.medium.url} 
                />
                <div className="content">
                    <div className="header">{VIDEO.snippet.title}</div>
                    <div className="description">
                        {VIDEO.snippet.channelTitle} - <span>Published On: </span>
                        {this.formatDate(`${VIDEO.snippet.publishedAt}`)}
                    </div>
                </div>
            </div>
        );
    }
}


export default VideoItem;