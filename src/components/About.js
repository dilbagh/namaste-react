import GithubUser from './GithubUser';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Namaste React Web Series</p>
      <div className="credits">
        <div className="credit">
          <h3 className="credit-heading">Course By</h3>
          <GithubUser username={'akshaymarch7'} />
        </div>
        <div className="credit">
          <h3 className="credit-heading">Developed By</h3>
          <GithubUser username={'dilbagh'} />
        </div>
      </div>
    </div>
  );
};

export default About;
