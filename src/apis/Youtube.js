import axios from 'axios';

const KEY = 'AIzaSyCKLPygYM5qpYt16H51sW03Pjy1CMD2WlY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})