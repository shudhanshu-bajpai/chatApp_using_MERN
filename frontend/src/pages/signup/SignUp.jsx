import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
        <div className="w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 border border-gray-100">
          <h1 className="justify-center text-center pt-2 font-semibold text-3xl text-black mb-8">
            SignUp to
            <span className="text-blue-400"> Streamly</span>
          </h1>
          <form onSubmit={handleSubmit} className="ml-4">
            <label className="text-black pl-3">Fullname</label>
            <br></br>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-4 input-bordered h-7"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
            <br></br>
            <label className="text-black pl-3">Username</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter username"
              className="pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-4 input-bordered h-7"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            <br></br>
            <label className="text-black pl-3">Password</label>
            <br></br>
            <input
              type="password"
              placeholder="Enter password"
              className="pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-5 input-bordered h-7"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <br></br>
            <label className="text-black pl-3">Confirm Password</label>
            <br></br>
            <input
              type="password"
              placeholder="confirm password"
              className="pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-5 input-bordered h-7"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <br></br>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <Link
              to="/login"
              className="ml-3 text-sm text-gray-700 hover:underline hover:text-blue-600 mt-2 inline-block mb-7"
            >
              Already have an account?
            </Link>
            <div>
              <button className="border-none text-white bg-black btn btn-sm mt-2 mr-28 ml-10 mb-5 w-24 pb-1 h-9" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
