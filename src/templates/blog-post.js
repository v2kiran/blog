import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import About from '../components/About'
import SocialLinks from '../components/SocialLinks'
import 'tocbot/dist/tocbot.css'
import { Tocbot } from './tocbot'

import './blog-post.scss'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

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
    //const postNode = this.props.data.markdownRemark;
    const { siteUrl } = this.props.data.site.siteMetadata
    const tags = post.frontmatter.tags
    const tocbot = require('./tocbot.js')

    return (

      <div className="container " >
        <div className="columns is-mobile">
          <div className="column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-9-desktop is-offset-1-desktop">
            <div className="content">
              <a name="top" />
              <div className="post-title">

                <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-dark-light">
                  {' '}
                  {post.frontmatter.title}{' '}
                </h1>
              </div>
              <div
                className="has-text-info has-text-weight-bold"
                style={{ fontSize: '14px', fonWeight: '600' }}
              >
                by {post.frontmatter.author}{' '} 
                <span 
                className=" has-text-dark"
                style={{marginLeft: '20px', fontSize: '12px', fonWeight: '600' }}
                >
                  on {' '}
                </span>
                <span
                  className="is-uppercase "
                  style={{marginLeft: '20px', fontSize: '12px', fonWeight: '600' , color: "#d9411e" }}
                >
                   {post.frontmatter.date}
                </span>
              </div>
  
              <br />
              <div
                className="js-toc-content"
                dangerouslySetInnerHTML={{
                  __html: post.html,
                }}
              />{' '}
              <Tocbot />
              <hr /> 
              <a href="#top">Back to top</a>
              <TagList tags={tags} /> <About />
              <SocialLinks postPath={post.frontmatter.path} postNode={post} />
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
          <div className="article-sidebar">
                  <nav className="toc js-toc" />
                </div>     
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
        date(formatString: "MMMM DD, YYYY")
        author
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
