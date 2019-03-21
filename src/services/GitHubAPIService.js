import axios from 'axios';
const getRepos = (name, sortType) => {
  if (!name || !sortType) return Promise.resolve([]);
  return axios
    .get(
      `https://api.github.com/search/repositories?q=${name}&sort=${sortType}&per_page=10`
    )
    .then(function(response) {
      return response.data.items;
    });
};

const getRepoById = id => {
  return axios
    .get('https://api.github.com/repositories/' + id)
    .then(function(response) {
      return response.data;
    });
};
export default {
  getRepos,
  getRepoById,
};
