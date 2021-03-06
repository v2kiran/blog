module.exports = {
    siteTitle: "Kirans Personal Blog", // Site title.
    siteTitleShort: "Kirans Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "Kirans Blog", // Alternative site title for SEO.
    //siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://kiranreddy.net", // Domain of your website without pathPrefix.
    pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "My Personal blog on Software and IT", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteFBAppID: "1825356251115265erer", // FB Application ID for using app insights
    googleAnalyticsID: "UA-47311644-5erewr", // GA tracking ID.
    disqusShortname: "", // Disqus shortname.
    postDefaultCategoryID: "Tech", // Default category for posts.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "Kiran", // Username to display in the author segment.
    userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "The Net", // User location to display in the author segment.
    userAvatar: "https://secure.gravatar.com/avatar/1ae2e91992ae82349d5bae973e89db23", // User avatar to display in the author segment.
    userDescription:
     "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/v2kiran",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/v2kiran",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:someone@gmail.com",
        iconClassName: "fa fa-envelope"
      }
    ],
    copyright: "Copyright ?? 2018. Advanced User", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0" // Used for setting manifest background color.
  };