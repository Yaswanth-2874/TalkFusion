import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center minw-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login to <span className="text-green-500">TalkFusion</span>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-bordered h-10"
              ></input>
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
              ></input>
            </div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Don't have an account?
            </a>
            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
}

export default Login;
