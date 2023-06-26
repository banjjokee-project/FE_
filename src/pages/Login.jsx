import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
  
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
            className="mx-auto h-6 mr-96"
            src="/assets/iconback.jpg"
            alt=""
            onClick={() => navigate("/")}
          />
          <h2 className="line mt-10 text-4xl leading-9 tracking-tight text-gray-900">
            Log-in
          </h2>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="block w-full h-14 border-2 border-black py-1.5 pl-4 text-gray-900 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <div className="flex items-center justify-between">
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="block w-full h-14 border-2 border-black py-1.5 pl-4 text-gray-900 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="block w-full h-14 justify-center bg-black rounded-md mt-4 px-3 py1.5 text-sm font-bold leading-6 text-white content-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => navigate("/example")}
              >
                NEXT
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="block w-full h-14 justify-center bg-black rounded-md mt-3 px-3 py1.5 text-sm font-bold leading-6 text-white content-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                GOOGLE LOG-IN
              </button>
            </div>
          </form>

          
          
          <div className="text-sm mt-1">
                  <div href="#" className="grid grid-flow-col auto-cols-max pt-3 font-semibold text-black hover:text-indigo-500">
                    <img className="w-5 h-4 mt-0.5" src="/assets/iconnext.png" alt="" />Forgot Password
                  </div>
            <div href="#" className="grid grid-flow-col auto-cols-max pt-1 font-semibold leading-6 text-black hover:text-indigo-500" onClick={() => navigate("/register")}>
            <img className="w-5 h-4 mt-1" src="/assets/iconnext.png" alt="" />Register
            </div>
          </div>
        </div>
      </div>
    );
  };


  
  export default Login;