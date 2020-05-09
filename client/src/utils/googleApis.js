import axios from 'axios';

export default function googleBooksApiRoutes () {

        return axios.get('http://books.google.com/books')
            .then(function(data) {
                response.json(data);
            })
            .catch(function(error) {
                response.send(error.message);
            })

}

