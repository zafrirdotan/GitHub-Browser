import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Search.scss';

// Options for the sort input.
const sortOptions = [
  {
    value: 'stars',
  },
  {
    value: 'forks',
  },
  {
    value: 'updated',
  },
];

// This component is state-full and only changes the parents state on 
// submit.   
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sortBy: '',
    };
  }

  componentWillMount() {
    this.setInitialState();
  }

  // Sets the initial search parameters based on the url parameters.  
  setInitialState = () => {
    const searchParams = this.props.searchParams;
    this.setState({
      searchText: searchParams.searchText,
      sortBy: searchParams.sortBy,
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSortChange = event => {
    this.setState({
      sortBy: event.target.value,
    });
  };

  // On button click Sends the local state of component to the parent component.    
  submitSearch = () => {
    this.props.search({ ...this.state });
  };

  render() {
    return (
      <div className="search-bar">
        <TextField
          id="search"
          value={this.state.searchText}
          label="Serach"
          className="search-input"
          margin="dense"
          variant="outlined"
          onChange={this.handleSearchChange}
        />

        <TextField
          id="sort"
          select
          className="sort-input"
          value={this.state.sortBy}
          onChange={this.handleSortChange}
          SelectProps={{
            native: true,
          }}
          margin="dense"
          variant="outlined"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
        <Button
          variant="outlined"
          color="primary"
          className="search-button"
          onClick={this.submitSearch}
        >
          Search
        </Button>
      </div>
    );
  }
}
Search.propTypes = {
  searchParams: PropTypes.object.isRequired,
};
