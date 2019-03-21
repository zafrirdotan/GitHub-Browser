import React from 'react';
import { shallow } from 'enzyme';
import RepoList from './RepoList';

it('RepoList renders two cards', () => {
  const repos = [
    {
      full_name: 'something',
      description: 'something else',
      stargazers_count: 5,
      id: '123',
    },
    {
      full_name: 'something',
      description: 'something else',
      stargazers_count: 5,
      id: '124',
    },
  ];
  const RepoListComponent = shallow(<RepoList repos={repos} />);

  expect(RepoListComponent.find('.repo-card')).toHaveLength(2);
});

it('RepoList renders 0 cards', () => {
  const repos = [];
  const RepoListComponent = shallow(<RepoList repos={repos} />);
  expect(RepoListComponent.find('.repo-card')).toHaveLength(0);
});





