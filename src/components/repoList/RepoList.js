import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import './RepoList.scss';

const RepoList = props => {
  return (
    <div className="repo-List">
      {props.repos.map(repo => {
        return (
          <Card key={repo.id} className="repo-card">
            <CardContent>
              <Link to={'/repo/' + repo.id} style={{ color: 'initial' }}>
                <h3>{repo.full_name}</h3>
                <p>{repo.description}</p>
                <div className="stars">
                  {repo.stargazers_count}
                  <Icon size="small">star</Icon>
                </div>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
