import React from "react"

const Navbar = () => {
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="default alt"
          />
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
          <a class="navbar-item">Home</a>

          <a class="navbar-item" href="/contact">
            Contact
          </a>
          <a class="navbar-item" href="/articles">
            Articles
          </a>
          <a class="navbar-item" href="/projects">
            Projects
          </a>
          <a class="navbar-item" href="/qualifications">
            Qualification
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
