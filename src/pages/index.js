import React from 'react'
import PostList from '../components/PostList'

export default function IndexPage(props) {
  const edges = props.data.allMarkdownRemark.edges
  const postsData = edges
    .filter(({
      node
    }) => new Date(node.frontmatter.date) < new Date()) // hide reserved posts
    .map(edge => edge.node)

  return ( 
  <div >
    <div className = "container" >
      <div className = "columns" >
 
        <div className = "column  is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet" >
        <div className="content">
        <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
      </div>
          <PostList postsData = {postsData}/> 
        </div> 
      </div>
     </div>
  </div>
  )
}

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`