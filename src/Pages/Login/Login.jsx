import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Login = () => {

  const {signIn, signInGoogle} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [google, setGoogle] = useState("");


console.log(email, password);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email, password) {
      setError("");
      signIn(email, password)
      .then(result => {
        console.log(result.user);
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        setError("Invalid Email or Password. Please use a valid Email and Password");
      })
    }
  }
  const handleGoogle = () => {
    signInGoogle()
    .then(result => {
      setGoogle(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-400">{error}</p>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">Or</p>
              <div className="form-control">
                <button onClick={handleGoogle} className="btn btn-primary">Login With Google</button>
              </div>
              <div className="flex flex-col px-2 mb-2 text-center">
                <p className="">Do not have an account?</p>
                <p>
                  Please{" "}
                  <NavLink to="/register" className="text-red-600">
                    {" "}
                    Register
                  </NavLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
