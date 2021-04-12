const api = "20398947-d1e437c4ec35c84ea5c56c206";
const url = "https://pixabay.com/api/?";

const fetchImages = (searchQuery, page) => {
  const fetchUrl = `${url}q=${searchQuery}&page=${page}&key=${api}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(fetchUrl).then((res) => res.json());
};

export default fetchImages;
