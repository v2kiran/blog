import React from 'react'

const Projects = () => (
  <div className="box" style={{ margin: '2rem 0' }}>
    <h2 className="title is-3">
      <a href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_modules?view=powershell-6">
        PowerShell Modules
      </a>
    </h2>
    <h6 className="title is-6">Open Source</h6>
    <br />
    <div className="columns">
      <div className="column is-4">
        <article className="message">
          <div className="message-header">
            <h6 className="title has-text-light is-6">PSAlphaFS</h6>
          </div>
          <div className="message-body">
            <p>
              PSAlphaFS is a wrapper for the ALphaFS .NET library, providing a
              small subset of functions that overcome the{' '}
              <strong>MAX_PATH limitation of 260 characters</strong> of the
              windows filesystem.
            </p>
            <p className="projects">
              This module is intended to work on windows alone because Linux and
              Unix systems do not have the 260 character length limitation. Also
              PowerShell Version 6 supports long paths natively so if you have
              PS v6 installed you do not need this module.
            </p>
          </div>
        </article>
        <p className="buttons">
          <a className="button" href="https://github.com/v2kiran/PSAlphaFS">
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub </span>
          </a>
          <a
            className="button is-primary"
            href="https://www.powershellgallery.com/packages/PSAlphaFS/2.0.0.1"
          >
            <span className="icon">
              <i className="fas fa-terminal" />
            </span>
            <span>PSGallery</span>
          </a>
        </p>
      </div>
      <div className="column is-4">
        <article className="message is-link ">
          <div className="message-header">
            <h6 className="title has-text-light is-6">PSLiteDB</h6>
          </div>
          <div className="message-body">
            <p>
              PSLiteDB is a PowerShell wrapper for LiteDB which is a{' '}
              <strong>noSQL singlefile datastore just like SQLite.</strong>{' '}
              PSLiteDB has been compiled against the .NET Standard 2 which means
              you can use this module with both Windows PowerShell 5 and above
              on windows and PowerShell Core 6 or above on linux. PS v6 is open
              source
            </p>

            <p className="projects">
              The advantage of using a nosql database is that you do not need to
              create tables with any particular schema. Columns in tables can be
              added or removed on the fly.
            </p>
          </div>
        </article>
        <p className="buttons">
          <a className="button" href="https://github.com/v2kiran/PSLiteDB">
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub</span>
          </a>
          <a
            className="button is-primary"
            href="https://www.powershellgallery.com/packages/PSLiteDB/0.1.1"
          >
            <span className="icon">
              <i className="fas fa-terminal" />
            </span>
            <span>PSGallery</span>
          </a>
        </p>
      </div>
      <div className="column is-4">
        <article className="message is-link ">
          <div className="message-header">
            <h6 className="title has-text-light is-6">PSSecret</h6>
          </div>
          <div className="message-body">
            PSSecret acts as your personal secure vault where you can{' '}
            <strong>
              encrypt, store & retrive data securely from the registry.
            </strong>{' '}
            You can store the following types of information :
            Strings,Credentials,Hashtables,Objects.
            <p className="projects">
              PSSecret uses the <strong>"Crytographic Message Syntax"</strong>{' '}
              introduced in PowerShell V5 which use the{' '}
              <strong>public key infrastructure PKI</strong>
              to encrypt data. The encrypted cannot be decrypted by any other
              user on any other computer than the one where it was encrypted.
            </p>
          </div>
        </article>
        <p className="buttons">
          <a className="button" href="https://github.com/v2kiran/PSSecret">
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub</span>
          </a>
          <a
            className="button is-primary"
            href="https://www.powershellgallery.com/packages/PSSecret/1.0.0"
          >
            <span className="icon">
              <i className="fas fa-terminal" />
            </span>
            <span>PSGallery</span>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Projects
