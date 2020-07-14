module.exports = {
  siteMetadata: {
    title: `Motion Developer`,
    author: `Motion Developer`,
    description: `After Effects expressions, templates, and all things JavaScript animation.`,
    siteUrl: `https://motiondeveloper.com`,
    social: {
      twitter: `modeveloper`,
      github: `motiondeveloper`,
    },
    repoUrl: `https://github.com/motiondeveloper/blog`,
  },
  mapping: {
    'Mdx.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: process.env.NODE_ENV === `production` && [`**/draft-*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `32`,
              icon: false,
              elements: [`h2`],
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
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
  ],
};
