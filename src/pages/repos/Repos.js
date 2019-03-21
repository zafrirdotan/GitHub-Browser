import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from '../../components/search/Search';
import GitHubAPIService from '../../services/GitHubAPIService';
import RepoList from '../../components/repoList/RepoList';
import AppMethods from '../../services/AppMethods';

import './Repos.scss';

export default class ReposPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParams: {
        searchText: '',
        sortBy: 'stars',
      },
      repos: [],
      isSpinnerOn: false,
      massage: null,
    };
  }

  componentWillMount() {
    this.setInitialState();
  }

  // Sets the initial state based on the url parameters.
  setInitialState = () => {
    const location = this.props.history.location;
    if (location.search) {
      const searchParams = AppMethods.parseSearchParams(location.search);
      if (searchParams.searchText) {
        this.setState(
          {
            searchParams: {
              searchText: searchParams.searchText,
              sortBy: searchParams.sortBy,
            },
          },
          () => this.search(this.state.searchParams)
        );
      }
    }
  };

  // Handles the search event that was triggered from the search component.
  // Sets The State and invokes the search method.
  submitSearch = searchState => {
    this.setState(
      { isSpinnerOn: true, searchParams: searchState, massage: null },
      () => {
        if (this.state.searchParams.searchText) {
          this.setURLParams(this.state.searchParams);
          this.search();
        } else {
          this.setState({ isSpinnerOn: false, repos: [] });
        }
      }
    );
  };

  // Fetch the repos from github APi based on two parameters:
  // searchText and sortBy.
  search = () => {
    GitHubAPIService.getRepos(
      this.state.searchParams.searchText,
      this.state.searchParams.sortBy
    )
      .then(repos => {
        const massage = !repos.length && 'No repositories found!';
        this.setState({ isSpinnerOn: false, repos, massage });
      })
      .catch(error => {
        this.setState({
          isSpinnerOn: false,
          repos: [],
          massage: 'There is a Problem with your network!',
        });
      });
  };

  // This method updates the Url query parameters.
  setURLParams = searchState => {
    this.props.history.push({
      search: `?searchText=${searchState.searchText}&sortBy=${
        searchState.sortBy
      }`,
    });
  };

  render() {
    const massage = this.state.massage ? (
      <div className="massage">{this.state.massage}</div>
    ) : null;

    const spinner = this.state.isSpinnerOn ? (
      <div className="spinner">
        <CircularProgress />
        <div> loading ...</div>
      </div>
    ) : null;

    return (
      <div>
        <Search
          search={this.submitSearch}
          searchParams={this.state.searchParams}
        />
        <RepoList repos={this.state.repos} />
        {spinner}
        {massage}
      </div>
    );
  }
}
