import React from 'react';
import { useNavigate } from "react-router-dom";

const Error = () => {
    
  
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-60 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="font-bold text-black text-5xl">404</div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div
                href="#"
                className="btn btn-primary w-full h-14 justify-center rounded-md mt-2 px-3 py1.5 text-sm font-bold leading-6 text-white content-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default Error;