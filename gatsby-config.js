// in gatsby-config.js
module.exports = {
  pathPrefix: "/sailsbibx",
}
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/ghost2.png`, // This path is relative to the root of the site.
        icon: `src/images/ghost.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

module.exports = {
plugins: [`gatsby-plugin-react-helmet`]
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};

