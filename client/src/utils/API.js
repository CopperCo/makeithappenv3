import axios from 'axios';

export default {
  // Gets all books
  getDreams: function() {
    return axios.get('/api/dreams');
  },
  // Gets the book with the given id
  getDream: function(id) {
    return axios.get('/api/dreams/' + id);
  },
  // Deletes the book with the given id
  deleteDream: function(id) {
    return axios.delete('/api/dreams/' + id);
  },
  // Saves a book to the database
  saveDream: function(dreamData) {
    return axios.post('/api/dreams', dreamData);
  }
};
