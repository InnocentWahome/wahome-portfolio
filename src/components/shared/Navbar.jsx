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
        <a class="navbar-item" href="/">
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
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item" href="/about-me">
            About me
          </a>
          <a class="navbar-item" href="/my-work">
            My Work
          </a>
          <a class="navbar-item" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
