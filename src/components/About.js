import React from 'react'

const About = () => (
  <div className="box" style={{ margin: '2rem 0 0 0' }}>
    <article className="media">
      <div className="media-left is-hidden-mobile">
        <figure className="image">
          <img
            src="https://secure.gravatar.com/avatar/1ae2e91992ae82349d5bae973e89db23"
            alt="gravatar image"
            style={{ borderRadius: '50%' }}
          />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Kiran Reddy</strong>
            <br />
            PowerShell Ninja, jack of many trades.
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <a href="mailto:v.2kirar@gmail.com" className="level-item">
              <span className="icon has-text-info">
                <i className="mdi mdi-24px mdi-email" />
              </span>
            </a>
            <a href="https://github.com/v2kiran" className="level-item">
              <span className="icon has-text-info">
                <i className="mdi mdi-24px mdi-github-circle" />
              </span>
            </a>
            <a href="https://twitter.com/v2kiran" className="level-item">
              <span className="icon has-text-info">
                <i className="mdi mdi-24px mdi-twitter" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
)

export default About
