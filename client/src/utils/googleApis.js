import axios from 'axios';

export default function googleBooksApiRoutes (searchTerm) {
    const apiKey = 'AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY';
    const formattedSearchTerm = searchTerm.split(' ').join('+');
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm}&key=${apiKey}`;

    return axios.get(endpoint);

}
