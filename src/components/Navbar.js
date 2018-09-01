import React from 'react'
import Link from 'gatsby-link'
import '../layouts/layout-style.scss'

const Navbar = ({ toggled, handleToggled }) => (
  <nav
    className="navbar is-dark  is-small"
    role="navigation"
    aria-label="main navigation"
    //style={{backgroundColor: "#363636"}}
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <span className="icon">
          <i className="fas fa-home" />
        </span>
        <span>{'  '}HOME</span>
      </Link>
    </div>
    <div
      className={toggled ? 'navbar-burger is-active' : 'navbar-burger'}
      onClick={() => handleToggled()}
    />

    <div className="navbar-start">
      <Link className="navbar-item" to="/tags">
      <span className="icon">
          <i className="fas fa-tags" />
        </span>
        <span>{'  '}TAGS</span>
      </Link>
      <Link className="navbar-item" to="/projects">
      <span className="icon">
          <i className="fab fa-osi" />
        </span>
        <span>{'  '}PROJECTS</span>
      </Link>
    </div>
    <div className="navbar-end">
      <a
        className="button is-small is-outlined is-dark is-inverted"
        href="https://kiranreddy.net/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '1rem 2rem 0rem 2rem' }}
      >
        <span className="icon">
          <i className="fas fa-rss" />
        </span>
        <span>Subscribe</span>
      </a>
    </div>
  </nav>
)

export default Navbar
