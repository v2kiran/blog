import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// layouts/index.js
//require("prismjs/themes/prism-xonokai.css");

//import 'typeface-noto-sans'
import 'bulma'
import 'mdi/scss/materialdesignicons.scss'
import 'prismjs/themes/prism-tomorrow.css'
//import 'prismjs/themes/prism-xonokai.css'
import './layout-style.scss'

import favicon from '../assets/favicon.ico'

const Header = ({ toggled, handleToggled }) => (
  <nav className="navbar has-shadow is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item navbar-title" style={{ fontWeight: 'bold' }}>
        <h6 className="title is-6 has-text-light">Home</h6>
      </Link>
      <div
        className={toggled ? 'navbar-burger is-active' : 'navbar-burger'}
        onClick={() => handleToggled()}
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className={toggled ? 'navbar-menu is-active' : 'navbar-menu'}>
      <div className="navbar-end">
        <Link className="navbar-item" to="/" >
          <h6 className="title is-6 has-text-light">Posts</h6>
        </Link>
        <Link className="navbar-item" to="/tags">
          <h6 className="title is-6 has-text-light">Tags</h6>
        </Link>
        <Link className="navbar-item" to="/projects">
          <h6 className="title is-6 has-text-light">Projects</h6>
        </Link><button className="button is-dark is-outlined"><a className="navbar-item" href="/rss.xml">RSS</a></button>
        
          
        
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="footer">
    <div className="container is-fluid">
      <div className="content has-text-centered">
        <p>Copyright Kiran Reddy © {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Powered by <a href="https://www.gatsbyjs.org">Gatsby.js</a>
        </p>
      </div>
    </div>
  </footer>
)

class TemplateWrapper extends Component {
  state = {
    toggled: false
  }

  handleToggled = () => {
    this.setState({ toggled: !this.state.toggled })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kirans's blog</title>
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Header toggled={this.state.toggled} handleToggled={this.handleToggled} />
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

Header.propTypes = {
  toggled: PropTypes.bool,
  handleToggled: PropTypes.func
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
