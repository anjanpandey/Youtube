import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    // create a state called videos
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSearch('');
    }

    onTermSearch = async term => {
        // async api request - from axios
        const response = await Youtube.get('/search',{
            params: {
                q: term
            }
        });
        // set the state
        this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
            <br/>
                <SearchBar onFormSubmit={this.onTermSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} 
                           onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;