import GitHubAPIService from './GitHubAPIService';

// Tests for GetRepos method
it('GetRepos showed return an array', () => {
  expect.assertions(1);
  return GitHubAPIService.getRepos('fifa', 'stars').then(res => {
    expect(Array.isArray(res)).toBeTruthy();
  });
});

it('GetRepos showed return an empty array', () => {
  expect.assertions(2);
  return GitHubAPIService.getRepos('qwertyujhgfdsdfgh', 'stars')
    .then(res => {
      expect(Array.isArray(res)).toBeTruthy();
      return res;
    })
    .then(res => {
      expect(res.length).toEqual(0);
    });
});

it('GetRepos showed return an empty array', () => {
  expect.assertions(2);
  return GitHubAPIService.getRepos(undefined, 'stars')
    .then(res => {
      expect(Array.isArray(res)).toBeTruthy();
      return res;
    })
    .then(res => {
      expect(res.length).toEqual(0);
    });
});

// Tests for getRepoById method

it('GetRepoById showed return an object ', () => {
  expect.assertions(2);
  return GitHubAPIService.getRepoById('2881111')
    .then(res => {
      expect(typeof res).toEqual('object');
      return res;
    })
    .then(res => {
      expect(res.id).toEqual(2881111);
    });
});

it('GetRepoById showed return an exception', () => {
  expect.assertions(1);
  return GitHubAPIService.getRepoById('000').catch(function(error) {
    expect(typeof error.response).toEqual('object');
  });
});
