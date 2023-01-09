import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid bg-primary m-3 p-2">
      <Link className="navbar-brand" to="/">FullStack</Link>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>
      </div>
      <Link className='btn btn-outline-light' to="adduser">Add user</Link>
    </div>
  </nav>
  )
}
