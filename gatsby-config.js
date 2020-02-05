/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `json`,
                path: `${__dirname}/src/data/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
    ],
}
