import axios from 'axios';

export default function googleBooksApiRoutes (searchTerm) {
    const apiKey = 'AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY';
    console.log(searchTerm);
    const formattedSearchTerm = searchTerm.split(' ').join('+');
    console.log(formattedSearchTerm);
    const formattedSearchTerm2 = encodeURIComponent(searchTerm.trim());
    console.log(formattedSearchTerm2);
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm2}&key=${apiKey}`;

    return axios.get(endpoint);

}
