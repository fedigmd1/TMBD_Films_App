import {API_TOKEN} from '../Helpers/key';

export function getFilmsFromApiWithSearchText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}