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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blog',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allMdx (filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  tags
                  date(formatString: "MMMM DD, YYYY")
                  difficulty
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'rawBody', 'description', 'tags', 'difficulty'],
        store: [
          'id',
          'slug',
          'date',
          'title',
          'excerpt',
          'description',
          'date',
          'difficulty',
          'tags',
          'frontmatter',
          'fields',
        ],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            title: node.frontmatter.title,
            rawBody: node.rawBody,
            description: node.frontmatter.description,
            difficulty: node.frontmatter.difficulty,
            tags: node.frontmatter.tags,
            id: node.id,
            slug: node.fields.slug,
            excerpt: node.excerpt,
            date: node.frontmatter.date,
            frontmatter: node.frontmatter,
            fields: node.fields,
          })),
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
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-typescript',
  ],
};
