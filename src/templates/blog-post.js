import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import About from '../components/About'

import './blog-post.scss'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
    //browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300, 
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced 
    offsetOpacity = 1200,
    //duration of the top scrolling animation (in ms)
    scrollDuration = 700;

const TagList = ({ tags }) => (
  <div>
    <h2 className="title"> Similar posts about... </h2>{' '}
    <div className="tags">
      {' '}
      {tags.map(tag => (
        <Link className="tag is-info is-medium" to={`/tags/${tag}`} key={tag}>
          {' '}
          {tag}{' '}
        </Link>
      ))}{' '}
    </div>{' '}
  </div>
)

function initUtterances() {
  const utterancesConfig = {
    src: 'https://utteranc.es/client.js',
    repo: 'v2kiran/blog',
    branch: 'master',
    async: true,
    'issue-term': 'pathname',
  }
  const utterances = document.createElement('script')
  const aboutBox = document.querySelector('.box')

  for (const [key, val] of Object.entries(utterancesConfig)) {
    utterances.setAttribute(key, val)
  }

  aboutBox.insertAdjacentElement('afterend', utterances)
}

export default class Template extends React.Component {
  componentDidMount() {
    initUtterances()
  }

  render() {
    const { markdownRemark: post } = this.props.data
    const { siteUrl } = this.props.data.site.siteMetadata
    const tags = post.frontmatter.tags
    //const myExtScript = require('./topscroll') 

    return (
      <div className="container ">
        <div className="columns is-mobile">
          <div className="column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-9-desktop is-offset-1-desktop">
            <div className="content">            
              <div className="post-title">
              <a name="top"></a>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-dark-light"> {post.frontmatter.title} </h1>{' '}
                <span className="has-text-dark is-size-6">
                  {' '}
                  <div style={{fontSize: "13px"}}>
                  {post.frontmatter.date}{' '}
                  </div>
                  
                </span>{' '}
              </div>{' '}
              <br></br>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.html,
                }}
              />{' '}
              <hr />
              <a href="#top">Back to top</a>
              <TagList tags={tags} /> <About />
              <ButtonWrapper>
                <Link to="/" className="button is-light  is-large">
                  <span className="icon is-medium">
                    <i className="fas fa-36px fa-list" />
                  </span>{' '}
                  <span> BACK TO ALL POSTS </span>{' '}
                </Link>{' '}
              </ButtonWrapper>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
      
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        title
        tags
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
