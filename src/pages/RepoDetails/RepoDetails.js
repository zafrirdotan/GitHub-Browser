import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GitHubAPIService from '../../services/GitHubAPIService';
import './RepoDetails.scss';

export default class RepoDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: null,
      gitButtonDisabled: false,
    };
  }

  componentWillMount = () => {
    this.getRepo();
  };
  
  // Fetches the repository by Id via Github API.
  // If there is no matching repository navigates to the repos page.
  getRepo = () => {
    const repoId = this.props.match.params.id;
    GitHubAPIService.getRepoById(repoId)
      .then(data => {
        this.setState({ repo: data });
      })
      .catch(error => {
        this.props.history.push('');
      });
  };

  // Handles the navigation to the git hub repository
  navigateToGitRipo = () => {
    window.open(this.state.repo.html_url);
    this.setState({
      gitButtonDisabled: true,
    });
  };

  render() {
    return (
      this.state.repo && (
        <div className="repo-details-container">
          <h3>{this.state.repo.full_name}</h3>
          <div className="button-container">
            <Button
              variant="outlined"
              color="primary"
              className="button"
              disabled={this.state.gitButtonDisabled}
              onClick={this.navigateToGitRipo}
            >
              Open on GitHub
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="button"
              onClick={this.props.history.goBack}
            >
              Back
            </Button>
          </div>
        </div>
      )
    );
  }
}
