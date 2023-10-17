const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39263242-9a9e6029252b757da1c0dfd4b';

function fetchImages(searchQuery, page) {
    return fetch(
      `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('No response from server'));
    });
  }
  
  export { fetchImages };