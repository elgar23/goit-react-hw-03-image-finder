export default function Api(onFetch, thisPage) {
  const KEY = '20398947-d1e437c4ec35c84ea5c56c206';
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${onFetch}&page=${thisPage}&per_page=12&key=${KEY}`,
  ).then(r => r.json());
}
