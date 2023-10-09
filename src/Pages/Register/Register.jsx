import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Register = () => {
  const { signUp, signInGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log(email, password);
  const handleRegister = (e) => {
    e.preventDefault();
    if (!/^(?=.*[A-Z])(?=.*[^A-Za-z]).{6,}$/.test(password)) {
      setError(
        "Error: The password must be at least 6 characters long, contain at least one capital letter, and have at least one special character."
      );
    } else {
      setError("");
      if (email) {
        signUp(email, password)
          .then((result) => {
            console.log(result.user);
            setSuccess("User Created Successfully");
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    }
  };
  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
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
              <p className="text-green-400">{success}</p>
              <div className="form-control mt-6">
                <button onClick={handleRegister} className="btn btn-primary">
                  Register
                </button>
              </div>
              <p className="text-center">Or</p>
              <div className="form-control">
                <button onClick={handleGoogle} className="btn btn-primary">
                  Register With Google
                </button>
              </div>
            </form>
            <div className="flex flex-col px-2 mb-2 text-center">
              <p className="">Already have an account?</p>
              <p>
                Please{" "}
                <NavLink to="/login" className="text-red-600">
                  {" "}
                  Login
                </NavLink>{" "}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
