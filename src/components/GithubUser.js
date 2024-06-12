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
      <div className="border border-gray-400 p-2 rounded-md shadow-md hover:shadow-lg hover:shadow-gray-400">
        <a href={html_url} target="_blank">
          <div className="flex">
            <img
              className="h-48 w-48 m-1 mr-3 rounded-md"
              src={avatar_url}
              alt={`${name} Avatar`}
            />
            <div className="">
              <h3 className="font-bold text-lg mb-3 mt-1">{name}</h3>
              <h4 className="flex font-thin font-mono text-sm mb-3">
                <img className="size-4 mr-1 pt-1" src={GITHUB_LOGO_URL} />
                {login}
              </h4>
              <p>Followers: {followers}</p>
              <p>Following: {following}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default GithubUser;
