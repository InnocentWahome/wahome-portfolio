import React from "react"
import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src={Logo} width="112" height="112" alt="default alt" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu"> 
        <div class="navbar-end">
          <a class="navbar-item" href="/admin/">
            Home
          </a>

          <a class="navbar-item" href="/admin/entries/">
            Add Something
          </a>
          <a class="navbar-item" href="/admin/stats">
            Site Stats
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
