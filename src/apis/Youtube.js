import axios from 'axios';

const KEY = 'AIzaSyApJu5Sl1MmPzGKr9ePbZqlM7RyNPvmSFI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
});