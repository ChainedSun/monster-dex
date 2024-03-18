// import React from 'react'

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
        <div>
            <h1>Page Not Found 404</h1>
            <p>you will be redirected back to home</p>
            <Link to={'/home'}>Home</Link>
        </div>
    </>
  )
}
