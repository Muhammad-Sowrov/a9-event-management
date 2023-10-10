import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl font-semibold">Oops!!!</h2>
      <br />
      <h3 className="text-3xl font-bold">
        Can not Find the page you requested!
      </h3>
      <div>
        <Link to={'/'}><button className="text-3xl mt-3 btn">Go Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
