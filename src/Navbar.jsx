import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'} class="nav-link">Home</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/about'} class="nav-link">About</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/contact'} class="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar