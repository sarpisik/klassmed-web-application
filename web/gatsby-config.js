require('dotenv').config()
const {
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  siteMetadata: {
    title: `Klassmed Lazer Epilasyon`,
    description: `Klassmed lazer epilasyon ve dövme silme cihazları.`,
    author: `@sarpisik`,
    siteUrl: 'https://www.klassmed.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'tr'
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_TRACK_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Klassmed Lazer Epilasyon Ve Dövme Silme Cihazları`,
        short_name: `Klassmed Lazer`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#007bff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `src/images/logo-pwa.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.klassmed.com',
        sitemap: 'https://www.klassmed.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig (path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}
