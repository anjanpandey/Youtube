import React from 'react';


class VideoDetail extends React.Component {

    renderContent() {
        const VIDEO = this.props.video;
        // on initial load - return loading
        if(!VIDEO) {
            return <div>Loading...</div>;
        }
        // create iframe src
        const videoSrc = `https://www.youtube.com/embed/${VIDEO.id.videoId}`;
        // return the content
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title={VIDEO.snippet.title} />
                </div>
                <div className="ui segment" style={{backgroundColor:"#E2E6E6"}}>
                    <h4 className="ui header">
                        {VIDEO.snippet.title}
                    </h4>
                    <p className="ui description">
                        {VIDEO.snippet.description}
                    </p>
                </div>
            </div>
        );
    }

    render () { 
        return (
            this.renderContent()
        );
    }
}


export default VideoDetail;