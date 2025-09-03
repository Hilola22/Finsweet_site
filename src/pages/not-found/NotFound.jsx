import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-center mt-[100px]">
      <h2 className="text-[80px]">404</h2>
      <h1 className="text-[40px]">Not Found</h1>
      <p className="font-extralight mb-[30px]">This page not found ❌</p>
      <Link
        className="w-auto h-[30px] px-[20px] py-[10px] rounded-[30px] bg-blue-900 text-white hover:bg-blue-600"
        to={"/"}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound