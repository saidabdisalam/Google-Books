import axios from 'axios';

const baseURL = "https://www.googleapis.com/books/v1/volumes?key=" + "AIzaSyA6bOtYAd-X3-daYvy4YNWfqJJL6k6FEuI" + "&q=";

const BookAPI = {
    searchBooks: function(query) {
        return axios.get(baseURL + query);
    },
    saveBook: function(body) {
        return axios.post("/api/savedbooks", body);
    },
    getSavedBooks: function() {
        return axios.get("/api/savedbooks");
    },
    deleteBook: function(id) {
        return axios.delete(`/api/savedbooks/${id}`);
    }
}

export default BookAPI;