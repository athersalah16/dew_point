import React from 'react'

function NotFound() {
  return (
    <div className="bg-white flex flex-col gap-4 justify-center items-center min-h-screen">
        <h1 className='text-3xl  font-bold text-blue-700'>404 - Page Not Found</h1>
        <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
        <a href='/' className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded">
          Go Home
        </a>
    </div>
  )
}

export default NotFound;
