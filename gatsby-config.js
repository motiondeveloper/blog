module.exports = {
  siteMetadata: {
    title: `Motion Developer Blog`,
    author: `Motion Developer`,
    description: `After Effects expressions, templates, and all things JavaScript animation.`,
    siteUrl: `https://motiondeveloper.com`,
    social: {
      twitter: `modeveloper`,
      github: `motiondeveloper`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: process.env.NODE_ENV === `production` && [`**/draft-*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 590,
              related: false,
              noIFrameBorder: true,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                js: 'javascript',
                sh: 'bash',
              },
              showLineNumbers: false,
              inlineCodeMarker: '›',
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Motion Developer Blog`,
        short_name: `MotionDeveloper`,
        start_url: `/`,
        background_color: `#282C35`,
        theme_color: `#B4DC96`,
        display: `minimal-ui`,
        icon: `content/assets/md-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`
  ],
}
