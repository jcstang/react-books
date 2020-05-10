import axios from 'axios';

export default function googleBooksApiRoutes (searchTerm) {
    const apiKey = 'AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY';
    const formattedSearchTerm = searchTerm.split(' ').join('+');
    //const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle:keyes&key=AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY`;
    const endpoint2 = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm}&key=${apiKey}`;

    return axios
        .get(endpoint2);
        // .then(function(data) {
        //     console.log('it worked!!');
        //     console.log(data);
        // })
        // .catch(function() {
        //     console.log('nope nope nope.... it broke');
        // })

        // return axios.get('http://books.google.com/books')
        //     .then(function(data) {
        //         response.json(data);
        //     })
        //     .catch(function(error) {
        //         response.send(error.message);
        //     })

}
