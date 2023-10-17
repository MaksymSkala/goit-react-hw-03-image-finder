const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39263242-9a9e6029252b757da1c0dfd4b';


function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => data.hits)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export { fetchImages };