import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className='h-50 w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 border border-gray-100'>
          <h1 className='justify-center text-center pt-2 font-semibold text-3xl text-black mb-8'>Login to
          <span className='text-blue-400'> ChatApp</span>
          </h1>
          <form>
          <label className='text-black pl-3'>Username</label><br></br>
          <input type="text" placeholder='Enter username' className='pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-4 input-bordered h-7'/><br></br>
          <label className='text-black pl-3'>Password</label><br></br>
          <input type="password" placeholder='Enter password' className='pl-1 text-black ml-3 bg-white border w-80 rounded border-gray-400 mb-5 input-bordered h-7'/><br></br>
          <a href='#' className='ml-4 text-sm hover:underline hover:text-blue-600 mt-2 inline-block mb-7' >
            {"Don't"} have an account?
          </a><br></br>
          <button className='text-white bg-black btn btn-sm mt-2 mr-28 ml-10 mb-5 w-24 h-9 text-base pb-1'>Login</button>
          <span className='text-teal-600'><a href='#'>Forgot password?</a></span>
          </form>
      </div>
    </div>
  )
}
export default Login
