import axios from 'axios';

const fetchData = async (searchQuery) => {
    const data = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            maxResult: 5,
            key: 'AIzaSyD5w161Ji2KBUyMtkMGvuXS-UFz405yYmY',
            q: searchQuery
        }
    });
    return data;
}

export default fetchData;
