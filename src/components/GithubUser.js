import React from 'react';
import { GITHUB_API, GITHUB_LOGO_URL } from '../utils/urls';

class GithubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { username } = this.props;
    const response = await fetch(GITHUB_API.getUser(username));
    const userInfo = await response.json();
    this.setState({ userInfo });
  }

  render() {
    const { userInfo } = this.state;
    if (!userInfo) {
      return <div className="github-user"></div>;
    }
    const { name, login, followers, following, avatar_url, html_url } =
      userInfo;
    return (
      <div className="github-user">
        <a href={html_url} target="_blank">
          <img
            className="github-avatar"
            src={avatar_url}
            alt={`${name} Avatar`}
          />
          <div className="github-details">
            <h3>{name}</h3>
            <h4>
              <img className="github-handle-logo" src={GITHUB_LOGO_URL} />
              {login}
            </h4>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default GithubUser;
