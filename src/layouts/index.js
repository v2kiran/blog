import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './layout-style.scss';
import favicon from '../assets/favicon.ico';
import Navbar from '../components/Navbar';

const Footer = () => (
  <div className="container is-fluid">
  <div className="content has-text-centered has-background-info">
    <p style={{fontSize: "14px"}}>Kiran Reddy © {new Date().getFullYear()}. All rights reserved.</p>
    <p style={{fontSize: "12px"}}>
      Powered by <a href="https://www.gatsbyjs.org">Gatsby.js</a>
    </p>
  </div>
</div>
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

    return(
      <div>
        <Helmet title="Home" />
        <Navbar />
        <div>{children()}</div>
        <Footer />
      </div>
    )


  }
}

Navbar.propTypes = {
  toggled: PropTypes.bool,
  handleToggled: PropTypes.func
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}


export default TemplateWrapper
