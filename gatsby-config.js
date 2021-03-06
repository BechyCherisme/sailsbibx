// in gatsby-config.js
module.exports = {
  pathPrefix: "/sailsbibx",
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sailsbib | generate leads for the offered services `,
        short_name: `sailsbib`,
        start_url: `/sailsbib`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ],
}

{
  plugins: [`gatsby-plugin-react-helmet`]
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

