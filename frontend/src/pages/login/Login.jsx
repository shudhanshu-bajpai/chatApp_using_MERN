import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96 ">
      <div className="h-50 w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 border border-gray-100">
        <h1 className="justify-center text-center pt-2 font-semibold text-3xl text-black mb-8">
          Login to
          <span className="text-blue-400"> Streamly</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="text-black pl-3 ml-4">Username</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter username"
            className="pl-1 text-black ml-7 bg-white border w-80 rounded border-gray-400 mb-4 input-bordered h-7"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label className="text-black pl-3 ml-4">Password</label>
          <br></br>
          <input
            type="password"
            placeholder="Enter password"
            className="pl-1 mr-2 text-black ml-7 bg-white border w-80 rounded border-gray-400 mb-5 input-bordered h-7"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <Link
            to="/signup"
            className=" text-gray-700 ml-7 text-sm hover:underline hover:text-blue-600 mt-2 inline-block mb-7"
          >
            {"Don't"} have an account?
          </Link>
          <br></br>
          <button className="text-white bg-black btn btn-sm mt-2 mr-20 ml-10 mb-5 w-24 h-9 text-base pb-1"
          disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
          <span className="text-teal-600">
            <a href="#">Forgot password?</a>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Login;
