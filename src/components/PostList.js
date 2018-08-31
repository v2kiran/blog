import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

//title color ,color:'#37A8D1'

const PostList = ({ postsData }) => (
  <div>
    {postsData.map(post => (
      <div
        key={post.id}
        className="box"
        style={{
          border: '1px solid #eaecee',
          padding: '2em 4em',
          marginTop: '1rem',
        }}
      >
        <p>
          <Link className="has-text-link" style={{ fontSize: '18px' }} to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
          {'  '}
          <span className="tag is-info">{post.frontmatter.category}</span>
        </p>
        <br />
          <p style={{ fontSize: '14px' }}>{post.excerpt}</p>
        <br />
        <Link className="button is-small" to={post.frontmatter.path}>
          Keep Reading →
        </Link>
      </div>
    ))}
  </div>
)

PostList.propTypes = {
  postsData: PropTypes.arrayOf(
    PropTypes.shape({
      excerpt: PropTypes.string,
      html: PropTypes.string,
      id: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        path: PropTypes.string,
        tags: PropTypes.array,
        title: PropTypes.string,
      }),
    })
  ),
}

export default PostList
