import GithubUser from './GithubUser';

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center font-serif my-2">
        About Us
      </h1>
      <p className="text-lg text-center my-2">Namaste React Web Series</p>
      <div className="flex justify-center">
        <div>
          <div className="m-2 p-2 w-[28rem]">
            <h3 className="font-bold font-serif my-1">Course By</h3>
            <GithubUser username={'akshaymarch7'} />
          </div>
          <div className="m-2 p-2 w-[28rem]">
            <h3 className="font-bold font-serif my-1">Developed By</h3>
            <GithubUser username={'dilbagh'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
