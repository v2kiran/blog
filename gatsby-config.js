module.exports = {
  siteMetadata: {
    siteUrl: 'https://KiranReddy.net',
    title: "Kiran Reddy's blog",
    description: 'about PowerShell,Cloud,Devops and IT.',
    author: {
      name: 'Kiran Reddy',
      email: 'someone@gmail.com',
      twitter: 'https://twitter.com/v2kiran',
      github: 'https://github.com/v2kiran'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              aliases: {ps: 'powershell'}
            }
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'v2kiran',
              includeDefaultCss: true
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 790,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Fira Mono',
                'Google Sans'

              ]
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-110939745-1111111',
        anonymize: true
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [{
          serialize: ({
            query: {
              site,
              allMarkdownRemark
            }
          }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [{
                  'content:encoded': edge.node.html
                }]
              })
            })
          },
          query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
          output: `/rss.xml`
        }]
      }
    },
    'gatsby-remark-responsive-iframe'
  ]
}