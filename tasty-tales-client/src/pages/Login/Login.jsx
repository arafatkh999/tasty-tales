import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignin, githubSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const loggedInUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignin = () => {
    githubSignin()
      .then((result) => {
        const loggedUser = result.user;
        
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center text-xl">Login Please</h2>
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p className="py-3 text-center">
            Don't have an account?{" "}
            <span className="text-orange-500">
              <Link to="/register">Register</Link>
            </span>{" "}
          </p>
          <div className="my-3 text-center">
            <button onClick={handleGoogleSignin} className="btn">
              SignIn with Google
            </button>
            <button onClick={handleGithubSignin} className="btn my-2">SignIn with Github</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
