import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, subtitle }) => (
  <section className="hero is-bold is-light is-small">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Hero
