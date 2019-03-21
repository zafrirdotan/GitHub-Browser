import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

it('RepoList renders two cards', () => {
  const searchParams = {
    searchText: 'fifa',
    sortBy: 'stars',
  };

  const SearchComponent = shallow(<Search searchParams={searchParams} />);
 
});
